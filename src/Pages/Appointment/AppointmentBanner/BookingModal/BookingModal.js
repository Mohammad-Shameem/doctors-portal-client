import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  // console.log(treatment.name)
  const { name, slots, _id } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    const email = event.target.email.value;
    const slot = event.target.slot.value;
    console.log(name, number, email, slot, _id, date, treatment.name);
    //to close the modal
    setTreatment(null);
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
            for="booking-modal"
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
              {slots.map((slot) => (
                <option>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
            <input
              name="number"
              type="number"
              placeholder="Type Your Number"
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
            <input
              name="email"
              autoComplete="off"
              type="Email"
              placeholder="Type your Email"
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
