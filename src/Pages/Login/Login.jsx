import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "./SocialLogin";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./login.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {ImSpinner11} from 'react-icons/im'
import toast from 'react-hot-toast'



const Login = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const { loginUser, loading , setLoading} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  console.log(from);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");



  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);



    // validation
    // setError("");
    // setSuccess("");
    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Please add at least one uppercase.");
      return;
    } else if (password.length < 6) {
      toast.error("Password must be 6 characters long");
      return;
    }

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.emailVerified) {
          toast.success("User login successful.");
          // setError("");
        }
        navigate(from, { replace: true });
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })
  };


  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };




  return (
    <div data-aos="fade-down">
      <div className="hero min-h-screen bg-theme-4-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-theme-3-500 text-3xl font-bold text-center">
                Please Login
              </h1>
              <img
                src="https://i.ibb.co/xXYVqsV/divider.png"
                alt=""
                className="mx-auto  w-1/2"
              />
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text my-text-2 font-semibold">
                      Email
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered my-bg-2"
                    name="email"
                  />
                </div>
                <div className="form-control password-input-wrapper">
                  <label className="label ">
                    <span className="label-text my-text-2 font-semibold">
                      Password
                    </span>
                  </label>
                  
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="input input-bordered my-bg-2 "
                      name="password"
                    />
                    <button
                      className=" password-toggle-button"
                      onClick={handleTogglePasswordVisibility}
                    >
                      {showPassword ? (
                        <AiOutlineEye  size={24}/>
                      ) : (
                        <AiOutlineEyeInvisible  size={24}/>
                      )}
                    </button>
                  </div>
               
                <div className="form-control mt-6">
                  <button className="btn my-btn-1">
                    
                    {loading ? <ImSpinner11  size={24} className="animate-spin"/> : "Login"}
                    
                    
                    </button>
                </div>
              </form>
              <p>
                New to <span className="my-text-1">SpeakEase ? </span>{" "}
                <Link to="/register">
                  <span className="text-theme-1 font-bold">Register</span>
                </Link>
              </p>
              <p className="text-center">or</p>
              <SocialLogin />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


