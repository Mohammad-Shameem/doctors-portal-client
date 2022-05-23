import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";

const AddDoctor = () => {
  const [userName, setUserName] = useState(" ");
  const imageStorageKey = "230fc5c72723f4c385adb1a72cc4cf3b";
  const [doctors, setDoctors] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const {
    data: services,
    isLoading,
    error,
    refetch,
  } = useQuery("services", () =>
    fetch("https://secret-island-49254.herokuapp.com/services").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = async (data, event) => {
    const image = data.Photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result?.data?.image?.url;
          const doctor = {
            name: data.name,
            specialty: data.Specialty,
            email: data.email,
            img: img,
          };
          fetch(`https://secret-island-49254.herokuapp.com/doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessstoken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("doctor data", data);
              if (data.insertedId) {
                toast.success("Doctor Added Successfully");
                setDoctors(data);
                reset();
              } else {
                toast.error("sorry,operation failed");
              }
            });
        }
      });
  };
  return (
    <div className="w-1/2 mx-auto mt-9">
      <h2 className="text-2xl font-bold mb-3">Ad a New Doctor</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
              maxLength: {
                value: 30,
                message: "your name length should below 30",
              },
              minLength: {
                value: 4,
                message: (
                  <>
                    <p>
                      we quess
                      <span className="text-secondary">{userName}</span> is not
                      a name
                    </p>
                  </>
                ),
                // message: "your name length should 4 or up to 4",
              },
            })}
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full max-w-xs"
            autoComplete="off"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
            {errors.name?.type === "maxLength" && (
              <span className="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
            {errors.name?.type === "minLength" && (
              <span className="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@+[a-z]+\.[a-z]{2,3}/,
                message: "Provide a Valid Email",
              },
            })}
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            autoComplete="off"
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}{" "}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("Specialty")}
            class="select select-bordered w-full max-w-xs mb-5"
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("Photo", {
              required: {
                value: true,
                message: "Photo is Required",
              },
            })}
            type="file"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors?.Photo?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors?.name?.message}
              </span>
            )}
          </label>
        </div>

        <input className="btn w-full max-w-xs" type="submit" value={"Add"} />
      </form>
    </div>
  );
};

export default AddDoctor;
