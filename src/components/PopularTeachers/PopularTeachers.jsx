import React, { useEffect, useState } from 'react';
import SinglePopularTeacher from './SinglePopularTeacher';

const PopularTeachers = () => {

  const [popularTeacher, setPopularTeacher] = useState([])

  useEffect(()=>{
    fetch('https://b7a12-summer-camp-server-side-mahbubur-rahman-rasel.vercel.app/popularteachers')
    .then(res=>res.json())
    .then(data=> setPopularTeacher(data))
  },[])
    
  
    return (
      <div className="my-container">

      <img
        src="https://i.ibb.co/xXYVqsV/divider.png"
        alt=""
        className="mx-auto my-10"
      />
      <h1 className="text-center text-theme-2 text-4xl font-bold my-6">
          Popular Teachers
        
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-container">
        {popularTeacher.map((item, index) => (
          <SinglePopularTeacher key={index} item={item} />
        ))}
      </div>
    </div>
    );
};

export default PopularTeachers;