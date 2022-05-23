import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useToken from "../Hooks/useToken";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const navigate = useNavigate();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [token] = useToken(user || gUser);
  let authenticaitonError;
  const [userName, setUserName] = useState(" ");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data, event) => {
    const email = data.email;
    const password = data.password;
    const displayName = userName;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName }); //ekhane await kora lagbe nahole user create korte diye abar bolbe name update kor kintu user create korar age name kivabe update korbe.

    reset();
  };
  if (token) {
    navigate("/appointment");
  }
  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  /*  if (true || loading || gLoading) {
    return <button className="btn btn-square loading"></button>;   //ekhane condition e true deyate amader jeta amra return kortechi seta always dekhabe.
  } */
  if (error || gError || updateError) {
    authenticaitonError = (
      <p className="text-red-600">
        {error?.message || gError?.message || updateError?.message}
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 justify-items-center items-center h-screen ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold ">Sign Up</h2>
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
                          <span className="text-secondary">{userName}</span> is
                          not a name
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
                <span className="label-text">Password</span>
              </label>

              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is Required",
                  },
                  minLength: {
                    value: 8,
                    message: "your password length must be 8",
                  },
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "your password should contain one special character one capital letter, one number one small letter and must be 8 length",
                  },
                })}
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn w-full max-w-xs"
              type="submit"
              value={"Sign Up"}
            />
          </form>
          <p className="text-xs text-center">
            Already have an account?
            <span className="text-secondary ml-1">
              <Link to={"/login"}>Login Now</Link>
            </span>
          </p>
          {authenticaitonError}
          <div className="divider w-full">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
