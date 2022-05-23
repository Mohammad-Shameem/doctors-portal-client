import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L2IPEKlxr2eiMDBtfIU1jiyQOJ6TysJ5vqdl3dQUBbIvfBsxm6IwiUHWgXYgmylUuocppNFTDsgZPv8U4svJw0Y00lINZcRYf"
);
const Pyament = () => {
  const { id } = useParams();
  const {
    data: appointment,
    isLoading,
    error,
    refetch,
  } = useQuery(["payment", id], () =>
    fetch(`https://secret-island-49254.herokuapp.com/booking/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessstoken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(appointment.price);
  return (
    <div className="w-1/2 mx-auto my-5">
      <div class="card w-50 max-w-md bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 className="font-bold text-xl">
            Dear,{" "}
            <span className="text-secondary">{appointment.patientName}</span>
          </h2>
          <h5 class="card-title font-semibold">
            Pay for
            <span className="text-secondary text-lg">
              {appointment.treatmentName}
            </span>
          </h5>
          <p>
            Your Appointment at{" "}
            <small className="text-secondary">{appointment.slot}</small> on{" "}
            <small className="text-secondary">{appointment.date}</small>
          </p>
          <p>
            Please Pay : $
            <span className="text-secondary"> {appointment.price}</span>{" "}
          </p>
        </div>
      </div>

      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mt-12">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Pyament;
