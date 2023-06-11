import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useUsers from "../../Hooks/useUsers";

const ManageUser = () => {
  

  const [users , refetch] = useUsers()

  const handleMakeAdmin = user =>{
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}

const handleMakeInstructor = user =>{
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
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
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}

  return (
    <div>
      <p className="text-3xl font-bold text-center mt-10">Total Users: {users.length}</p>
      <div className="overflow-x-auto">
        <table className="table mx-auto w-2/3">
          <thead className="bg-theme-1 text-theme-3-100 text-lg">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Change Role</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map((item,index)=>(
                <tr key={index}>
              <th>{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>

              <td className="flex gap-2 ">
                <button className= {`my-btn-1 rounded-md disabled:opacity-50 disabled:pointer-events-none `} disabled={item.role === "admin"} onClick={()=>handleMakeAdmin(item)}>Make Admin</button>
                <button className=" my-btn-1 rounded-md disabled:opacity-50 disabled:pointer-events-none" 
                disabled={item.role === "instructor"}
                onClick={()=>handleMakeInstructor(item)}>Make Instructor</button>
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

export default ManageUser;
