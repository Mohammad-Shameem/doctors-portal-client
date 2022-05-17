import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  // console.log(treatment.name)
  const { name, slots, _id } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const number = event.target.number.value;
    const slot = event.target.slot.value;
    const formattedDate = format(date, "PP");
    const booking = {
      treatmentName: treatment.name,
      treatmentId: _id,
      date: formattedDate,
      slot: slot,
      patientEmail: user.email,
      patientName: user.displayName,
      phone: number,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Appointment is set,${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already booked this Appointment on,${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        //to close the modal
        setTreatment(null);
      });
  };
  return (
    <div>
      {/* The button to open modal  */}
      {/* <label for="my-modal-6" className="btn modal-button"></label> */}

      {/* Put this part before </body> tag  */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            onSubmit={handleBooking}
            className="justify-items-center grid grid-cols-1 gap-5"
          >
            <h3 className="font-bold text-lg text-secondary">{name}</h3>
            <input
              disabled
              type="text"
              value={`${format(date, "PP")}`}
              className="text-sm font-bold input input-bordered input-success w-full max-w-xs"
              readOnly
            />
            <select
              name="slot"
              className="select select-success w-full max-w-xs text-sm font-bold  select-bordered"
            >
              {slots.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
              {/* map 3 ta parameter dey ekta holo element mane map kore jeta pai set arekta holo jeta pari tar index ebrong seserta holo jei array er upor amra map kori oi array tai. */}
            </select>
            <input
              name="name"
              type="text"
              value={user?.displayName || ""}
              disabled
              className="input input-bordered input-success w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              value={user?.email || ""}
              disabled
              className="input input-bordered input-success w-full max-w-xs"
            />
            <input
              name="number"
              type="number"
              placeholder="Type Your Number"
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
            <input
              type="submit"
              className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase w-1/2 mx-auto"
              value="Submit"
            ></input>
          </form>

          <div className="modal-action">
            {/* <label for="booking-modal" className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase w-1/2 mx-auto">YAY</label> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
