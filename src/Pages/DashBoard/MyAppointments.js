import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyAppointments = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    fetch(
      `https://secret-island-49254.herokuapp.com/mybookings?patientEmail=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessstoken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401) {
          signOut(auth);
          localStorage.removeItem("accessstoken");
          navigate("/home");
          toast.error("Unauthorized Access");
        } else if (res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessstoken");
          navigate("/home");
          toast.error("Forbidden Access");
        }
        console.log(res);
        return res.json();
      })
      .then((data) => setAppointment(data));
  }, [user]);

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Treatment</th>
            <th>price</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {appointment.map((d, index) => (
            <tr key={index}>
              <th className="bg-black text-white">{index + 1}</th>
              <td className="bg-black text-white">{d.patientName}</td>
              <td className="bg-black text-white">{d.date}</td>
              <td className="bg-black text-white">{d.slot}</td>
              <td className="bg-black text-white">{d.treatmentName}</td>
              <td className="bg-black text-white">${d?.price}</td>
              <td className="bg-black ">
                {d.paid ? (
                  <div
                    class="tooltip  tooltip-warning"
                    data-tip={`Trnsaction Id : ${d?.transactionId}`}
                  >
                    <h5 className="text-success ">Paid</h5>
                  </div>
                ) : (
                  <Link
                    to={`/dashboard/payment/${d._id}`}
                    className="btn btn-xs bg-white text-black no-underline hover:bg-white"
                  >
                    Pay
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointments;
