import React from "react";
import classes from "../../../public/Classes.json";
import SingleClass from "./SingleClass";

const Classes = () => {
  return (
    <div>
     
      <div className="grid grid-cols-3 gap-4 my-container">
        
        {classes.map((item, index) => 
         
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
