import React from 'react';

const Enroll = ({enroll, index}) => {
    const {transactionId,price,date,className} = enroll
    return (
        <tr>
        <th>{index +1}</th>
        <td>{className}</td>
        <td>$ {price} </td>
        <td>{date}</td>
      </tr>
    );
};

export default Enroll;