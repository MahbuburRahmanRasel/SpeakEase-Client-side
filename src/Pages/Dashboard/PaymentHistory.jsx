import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import SinglePaymentHistory from './SinglePaymentHistory';

const PaymentHistory = () => {
    
    const { user } = useContext(AuthContext);
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    fetch(`https://b7a12-summer-camp-server-side-mahbubur-rahman-rasel.vercel.app/payclass/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setEnrolled(data));
  }, []);

    return (
        <div>
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
              <th>Transaction ID </th> 
            </tr>
          </thead>
          <tbody className="text-center">
            {enrolled.map((enroll, index) => (
              <SinglePaymentHistory key={index} enroll={enroll} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default PaymentHistory;