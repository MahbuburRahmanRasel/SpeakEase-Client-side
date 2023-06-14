import React, { useEffect, useState } from "react";
import SingleSortedClass from "./SingleSortedClass";

const SortedClass = () => {
  const [sortedClass, setSortedClass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sortclass")
      .then((res) => res.json())
      .then((data) => setSortedClass(data));
  }, []);

  return (
    <div className="my-container">

      <img
        src="https://i.ibb.co/xXYVqsV/divider.png"
        alt=""
        className="mx-auto my-10"
      />
      <h1 className="text-center text-theme-2 text-4xl font-bold my-6">
          Popular Class
        
        </h1>
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 my-container">
        {sortedClass.map((item, index) => (
          <SingleSortedClass key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SortedClass;
