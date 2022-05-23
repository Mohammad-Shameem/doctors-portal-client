import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(" ");
  const [cardSuccess, setCardSuccess] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { _id, price, patientName, patientEmail } = appointment;
  useEffect(() => {
    fetch("https://secret-island-49254.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessstoken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
      setCardSuccess("");
      return;
    } else {
      setCardError(" ");
    }
    setProcessing(true);
    //confrim card paymentMethod
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patientEmail,
          },
        },
      });
    if (intentError) {
      setCardError(intentError.message);
      setProcessing(false);
    } else {
      setCardError("");

      setTransactionId(`Your Transaction Id is : ${paymentIntent.id}`);
      setCardSuccess("Congratulation,you paid the payment SUCCESSFULLY");

      //update payment to the Database
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://secret-island-49254.herokuapp.com/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessstoken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase mt-8 px-8 py-5"
          type="submit"
          disabled={!stripe || !clientSecret || cardSuccess}
        >
          Pay
        </button>
      </form>
      <p className="text-lg font-bold text-center text-red-600">{cardError}</p>
      <div>
        <p className="text-lg font-bold text-center text-success">
          {cardSuccess}
        </p>
        <p className="text-lg font-bold text-center text-orange-500">
          {" "}
          {transactionId}
        </p>
      </div>
    </>
  );
};

export default CheckoutForm;
