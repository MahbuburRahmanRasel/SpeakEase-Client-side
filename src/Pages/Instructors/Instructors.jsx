import React from 'react';
// import teachers from '../../../public/Teachers.json'
import Instructor from './Instructor';
import { useLoaderData } from 'react-router-dom';

const Instructors = () => {

  const teachers = useLoaderData()


    return (
        <div>
     
      <div className="grid grid-cols-3 gap-4 my-container">
        
        {teachers.map((item, index) => 
         
         <Instructor
         key={index}
         item = {item}
         
         />
         
          
          
        
        )}
      </div>
    </div>
    );
};

export default Instructors;