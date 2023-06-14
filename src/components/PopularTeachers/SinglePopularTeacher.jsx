import React from 'react';

const SinglePopularTeacher = ({item}) => {

    const {instructor, image, totalStudents}  = item 
    return (
        <div>
        <div className= "adhoster__card" >
           <div className=  "adhoster__circle"></div>
           
               <img src={image} alt=""  className='w-full'/>
         
           <h1 className='text-xl  '>Name of Instructor <br /> <span className='font-bold text-theme-3-400 '>{instructor} </span> </h1>
         
          
           <p>Total Students : {totalStudents}</p>

           
           
       </div>
   </div>
    );
};

export default SinglePopularTeacher;