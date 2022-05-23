import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";

const ManageDoctors = () => {
  // const [doctors, setDoctors] = useState([]);
  // useEffect(() => {
  //   fetch(`https://secret-island-49254.herokuapp.com/doctors`, {
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessstoken")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setDoctors(data));
  // }, []);
  const {
    data: doctors,
    isLoading,
    error,
    refetch,
  } = useQuery("doctors", () =>
    fetch(`https://secret-island-49254.herokuapp.com/doctors`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessstoken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const deleteDoctor = (email, name) => {
    const proceed = window.confirm("Are you sure!");
    if (proceed) {
      fetch(`https://secret-island-49254.herokuapp.com/doctor/${email}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessstoken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success(`Doctor: ${name} is Deleted.`);
            refetch();
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-2xl mb-5">Manage Doctors</h1>
      <div>
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Email</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src={doctor.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="font-bold">{doctor.name}</div>
                  </td>
                  <td>{doctor.specialty}</td>
                  <td>{doctor.email}</td>
                  <td>
                    <button
                      onClick={() => deleteDoctor(doctor.email, doctor.name)}
                      class="btn btn-xs btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctors;
