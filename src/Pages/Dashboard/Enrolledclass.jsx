import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Enroll from "./Enroll";

const Enrolledclass = () => {
  const { user } = useContext(AuthContext);
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/payclass/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setEnrolled(data));
  }, []);

  return (
    <div>
      <p className="text-xl font-bold text-center">Total Enrolled Classes : {enrolled.length}</p>
      <div>
        <table className="table table-zebra w-2/3 mx-auto">
          {/* head */}
          <thead className="text-center">
            <tr className=" text-theme-dark text-lg">
              <th>No.</th>
              <th>Name of class</th>
              <th>Payment</th>
              <th>Date of Joining</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {enrolled.map((enroll, index) => (
              <Enroll key={index} enroll={enroll} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Enrolledclass;
