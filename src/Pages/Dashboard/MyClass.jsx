import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MyClass = () => {

    const [myclass , setMyclass] = useState([])
    const { user } = useContext(AuthContext);

    useEffect(()=>{
        fetch(`https://b7a12-summer-camp-server-side-mahbubur-rahman-rasel.vercel.app/allclasses/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyclass(data))
    },[])


    return (
        <div>
            <p className='text-2xl font-bold text-center'> Total Posted Class : {myclass.length}</p>
            <div className=" overflow-y-scroll overflow-x-scroll h-96">
          <table className="table mx-auto w-2/3">
            <thead className="bg-theme-1 text-theme-3-100 text-sm">
              <tr>
                <th></th>
               
                <th>Class Name</th>
                <th>Enrolled Sutdents</th>
                <th>Status</th>
                <th>Feedback</th>
                
              </tr>
            </thead>
            <tbody>
            {
              myclass.map((item,index)=>(
                  <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.languageName}</td>
                <td>{item.totalStudents}</td>
                <td>{item.status}</td>
                <td>{item?.feedback}</td>
                
              </tr>
  
              ))
            }
              
            </tbody>
          </table>
        </div>

        </div>
    );
};

export default MyClass;