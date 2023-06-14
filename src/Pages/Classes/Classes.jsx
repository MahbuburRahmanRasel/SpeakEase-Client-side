import React from "react";
// import classes from "../../../public/Classes.json";
import SingleClass from "./SingleClass";

import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAllClasses from "../../Hooks/useAllClasses";

const Classes = () => {

  const [allClasses] = useAllClasses()



  return (
    <div>
     
      <div className="grid grid-cols-3 gap-4 my-container">
        
        {allClasses.map((item, index) => 
         
         <SingleClass 
         key={index}
         item = {item}
         
         />
         
          
          
        
        )}
      </div>
    </div>
  );
};

export default Classes;
