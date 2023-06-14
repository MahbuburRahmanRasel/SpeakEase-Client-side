import React from 'react';

const SinglePaymentHistory = ({enroll,index}) => {

    const {transactionId,price,date,className} = enroll
    return (
        
            <tr>
        <th>{index +1}</th>
        <td>{className}</td>
        <td>$ {price} </td>
        <td>{date}</td>
        <td>{transactionId}</td>
      </tr>
        
    );
};

export default SinglePaymentHistory;