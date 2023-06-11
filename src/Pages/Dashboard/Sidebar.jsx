import React, { useState } from 'react';
import {FaUserCheck, FaUserFriends, FaUserGraduate} from 'react-icons/fa'
import {BsClipboardFill, BsFillArrowLeftSquareFill, BsFillCartCheckFill} from 'react-icons/bs'
import { AiFillFileAdd, AiFillHome } from 'react-icons/ai';
import SidebarItem from './SidebarItem';
import { Link } from 'react-router-dom';












const Sidebar = () => {
    
    const [open, setOpen] = useState(true);

   const menus= 
    [
        { "name": "Manage Class", "link": "/dashboard/manageclass", icon: <BsClipboardFill/> , "role": "admin" },
        { "name": "Manage User", "link": "/dashboard/manageuser", icon: <FaUserFriends/> , "role": "admin" },
        { "name": "Add A Class", "link": "/dashboard/addclass", icon: <AiFillFileAdd /> , "role": "instructor" },
        { "name": "My Class", "link": "/dashboard/myclass", icon: <FaUserGraduate /> , "role": "instructor" },
        { "name": "My selected Class", "link": "/dashboard/selectedclass", icon: <FaUserCheck /> , "role": "user" },
        { "name": "Enrolled Class", "link": "/dashboard/enrolledclass", icon: <BsFillCartCheckFill /> , "role": "user" }
        
    ]
    
    
    return (
        <section className="flex gap-6  ">
        <div
          className={` min-h-screen bg-theme-1 w-60 ${!open && "w-[64px]"}    duration-500 text-gray-100 px-4 relative`}
        >
  
          <BsFillArrowLeftSquareFill
          
          className={`absolute cursor-pointer -right-3 bottom-1/4 theme-icon
            ${!open && "rotate-180"}  rounded-full ` }
            onClick={() => setOpen(!open)}
            size={30}
  
  
          />
          <Link to='/' >
          <div className= {`flex gap-3 my-5  text-theme-2 text-xl font-bold hover:bg-theme-4-400 cursor-pointer ${
            !open && "opacity-0 translate-x-28 duration-500 overflow-hidden "} `}>
          <AiFillHome size={24} />
          <p>Home</p>

          </div>
          <img
        src="https://i.ibb.co/xXYVqsV/divider.png"
        alt=""
        className="mx-auto my-10 "
      />
          
          </Link>
 
  
          <div className= {`mt-4 flex flex-col gap-4 relative `}>
            {menus?.map((menu, index) => {
              return <SidebarItem key={index} menu={menu} open={open}
             
             
              index={index}
              
              ></SidebarItem>;
              
            })}
          </div>
     
        </div>
      </section>
    );
};

export default Sidebar;