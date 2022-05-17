import React from "react";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";

const MyAppointments = () => {
  const [user] = useAuthState(auth);

  const { data, isLoading, refetch, error } = useQuery(
    ["mybookings", user],
    () =>
      fetch(
        `http://localhost:5000/mybookings?patientEmail=${user?.email}`
      ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
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
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{d.patientName}</td>
              <td>{d.date}</td>
              <td>{d.slot}</td>
              <td>{d.treatmentName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointments;
