import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from './SocialLogin';
import AOS from "aos";
import "aos/dist/aos.css";






const Register = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const {registerUser}= useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/';
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

const handleSignup = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photourl.value
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo,email,password);


    // validation
    setError('');
    setSuccess('');
    if (!/(?=.*[A-Z])/.test(password)) {
        setError('Please add at least one uppercase.');
        return
    }
  
    else if (password.length < 6) {
        setError('Password must be 6 characters long');
        return
    }


    registerUser(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      setSuccess('User has been created successfully');
      
      
      navigate(from, { replace: true });
    })
    .catch(error =>{
      setError(error.message);
    })


}



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
                <form onSubmit={handleSignup}>
                <div className="form-control">
                
                <label className="label">
                  <span className="label-text my-text-2 font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered my-bg-2"
                  name= "name"
                />
              </div>
              <div className="form-control">
                
                <label className="label">
                  <span className="label-text my-text-2 font-semibold">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  className="input input-bordered my-bg-2"
                  name = 'photourl'
                />
              </div>
              <div className="form-control">
                
                <label className="label">
                  <span className="label-text my-text-2 font-semibold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered my-bg-2"
                  name= 'email'
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text my-text-2 font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered my-bg-2"
                  name='password'

                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text my-text-2 font-semibold">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered my-bg-2"
                  name='confirmpassword'

                />
                
              </div>
              <div className="form-control mt-6">
               <button className="btn my-btn-1">Register</button>
              </div>
              </form>
              <p>Already Register to <span className="my-text-1">SpeakEase ? </span> <Link to='/login'><span className="text-theme-1 font-bold">Login</span></Link> </p>
              <p className="text-center">or</p>
              <SocialLogin />
              <p className=' text-red-600 '>{error}</p>
            <p className='my-text-1 '>{success}</p>


             
            </div>
          </div>
        </div>
      </div>
    </div>
       
    );
};

export default Register;