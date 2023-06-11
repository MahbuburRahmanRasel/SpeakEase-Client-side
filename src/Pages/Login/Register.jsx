import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "./SocialLogin";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { registerUser, updateUserProfile } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = (data) => {
    registerUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email, role: "user" };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div data-aos="fade-down">
      <div className="hero min-h-screen bg-theme-3-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-theme-3-500 text-3xl font-bold text-center">
                Please Register
              </h1>
              <img
                src="https://i.ibb.co/xXYVqsV/divider.png"
                alt=""
                className="mx-auto  w-1/2"
              />
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-theme-3-500">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-theme-3-500">Photo URL is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-theme-3-500">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-theme-3-500">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-theme-3-500">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-theme-3-500">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-theme-3-500">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("confirmpassword", {
                      required: true,
                      validate: (value) =>
                        value === password.current || "Passwords do not match",
                    })}
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    className="input input-bordered"
                  />
                  {errors.confirmpassword && (
                    <span className="text-theme-3-500">
                      Confirm Password is required
                    </span>
                  )}
                  {errors.confirmpassword && <span className="text-theme-3-500" >{errors.confirmpassword.message}</span>}
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn my-btn-1"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <p>
                Already Register to{" "}
                <span className="my-text-1">SpeakEase ? </span>{" "}
                <Link to="/login">
                  <span className="text-theme-1 font-bold">Login</span>
                </Link>{" "}
              </p>
              <p className="text-center">or</p>
              <SocialLogin />
              <p className=" text-theme-3-500 ">{error}</p>
              <p className="my-text-1 ">{success}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
