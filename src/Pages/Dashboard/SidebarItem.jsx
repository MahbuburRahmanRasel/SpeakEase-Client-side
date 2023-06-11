import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ menu, open }) => {

const user = {role: "user"}



  return (
    <>
      {
        user.role === menu.role && 
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
