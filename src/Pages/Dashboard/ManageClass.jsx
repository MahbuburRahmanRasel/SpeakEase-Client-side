import React, { useEffect, useState } from 'react';
import useAllClasses from '../../Hooks/useAllClasses';
import Swal from 'sweetalert2';

const ManageClass = () => {


    // const [allclass , setAllclass] =useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/allclasses/')
    //     .then(res=>res.json())
    //     .then(data=>setAllclass(data))
    // },[])


    const [allClasses, refetch] = useAllClasses()


    const handleApproved = item =>{
        fetch(`http://localhost:5000/allclasses/approved/${item._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${item.languageName} is an approved Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleDenied = item =>{
        fetch(`http://localhost:5000/allclasses/denied/${item._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${item.languageName} is an Denied Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    return (
        <div className=''>
        <p className="text-3xl font-bold text-center mt-10">Total Classes: {allClasses.length}</p>
        <div className=" overflow-y-scroll overflow-x-scroll h-96">
          <table className="table mx-auto w-2/3">
            <thead className="bg-theme-1 text-theme-3-100 text-sm">
              <tr>
                <th></th>
                <th>Instructor Name</th>
                <th>Class Name</th>
                <th>Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Change Status</th>
               
              </tr>
            </thead>
            <tbody>
            {
              allClasses.map((item,index)=>(
                  <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.instructorName}</td>
                <td>{item.languageName}</td>
                <td>{item.availableSeats}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
  
                <td className="flex gap-2 ">
                  <button className= {`my-btn-1 rounded-md disabled:opacity-50 disabled:pointer-events-none `} disabled={item.status === "approved" ||item.status === "denied"} onClick={()=>handleApproved(item)}>Approve</button>
                  <button className=" my-btn-1 rounded-md disabled:opacity-50 disabled:pointer-events-none" 
                  disabled={item.status === "approved"}
                  onClick={()=>handleDenied(item)}>Deny</button>
                  <button className=" my-btn-1 rounded-md disabled:opacity-50 disabled:pointer-events-none" 
                  disabled={item.role === "instructor"}
                  onClick={()=>handleMakeInstructor(item)}>Send Feedback</button>
                </td>
              </tr>
  
              ))
            }
              
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageClass;