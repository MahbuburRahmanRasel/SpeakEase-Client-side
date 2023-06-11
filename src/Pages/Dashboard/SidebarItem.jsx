import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useUsers from "../../Hooks/useUsers";
import { AuthContext } from "../../Providers/AuthProvider";

const SidebarItem = ({ menu, open }) => {

const [, , requireUser ] = useUsers()

// const {user} = useContext(AuthContext)

// const requireUser = users.find((ele) => (ele?.email === user?.email))
// console.log(requireUser)


  return (
    <>
      {
        requireUser?.role === menu.role && 
        <Link
        to={menu?.link}
        className={`  flex items-center text-sm  gap-3 font-medium  hover:bg-theme-5-400  cursor-pointer text-theme-3-100 `}
      >
        <div
          className={` duration-300 pt-3  ${
            !open && "border-b-2 border-theme-1-light-2	"
          }`}
        >
          {React.cloneElement(menu?.icon, { size: "24" })}
        </div>
        <h2
          className={`whitespace-pre duration-500 ${
            !open && "opacity-0 translate-x-28 overflow-hidden "
          }`}
        >
          {menu?.name}
        </h2>
      </Link>
      }
    </>
  );
};

export default SidebarItem;
