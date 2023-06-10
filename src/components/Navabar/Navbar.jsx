import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {
  BsFillCartFill,
  BsFillPersonVcardFill,
  BsPersonFill,
  BsPersonVideo3,
} from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import useCart from "../../Hooks/useCarts";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  const navigate = useNavigate();

  console.log(cart)
  const handleLogout = () => {
    logOut()
      .then(navigate("/", { replace: true }))
      .catch((err) => {
        console.log(err);
      });
  };

  const navItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <div className="flex flex-row justify-center items-center gap-2 text-theme-dark hover:text-theme-light ">
          <AiFillHome className="icon-color" />
          Home
        </div>
      </NavLink>
      <NavLink
        to="/instructors"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <div className="flex flex-row justify-center items-center gap-2 text-theme-dark">
          <BsPersonFill className="icon-color" />
          Instructors
        </div>
      </NavLink>
      <NavLink
        to="/classes"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <div className="flex flex-row justify-center items-center gap-2 text-theme-dark">
          <BsFillPersonVcardFill className="icon-color" />
          Classes
        </div>
      </NavLink>

      {
        user? 
        <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <div className="flex flex-row justify-center items-center gap-2 text-theme-dark relative">
          <BsFillCartFill className="icon-color " />
          <p className="absolute -top-1 left-3 text-[#A83A49] font-bold">+{cart?.length || 0}</p>
          Dashoboard
          
        </div>
      </NavLink>
      :
      ""
      }




    </>
  );

  return (
    <div>
      <div className="navbar bg-transparent my-container   justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <img
            src="https://i.postimg.cc/X7f42fdZ/logo.png"
            alt=""
            className="w-1/3"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" px-1  font-bold lg:flex gap-5">{navItems}</ul>
        </div>

        <div className="navbar-end gap-6">
          {user?.photoURL ? (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-50 rounded-full border ">
                <img src={user?.photoURL} alt="" title={user?.displayName} />
              </div>
            </label>
          ) : (
            <p className="my-text-1 mr-20 ">{user?.email}</p>
          )}

          {user ? (
            <button className="btn my-btn-1" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn my-btn-1">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
