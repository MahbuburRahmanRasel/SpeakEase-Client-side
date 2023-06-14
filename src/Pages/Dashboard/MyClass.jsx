import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MyClass = () => {

    const [myclass , setMyclass] = useState([])
    const { user } = useContext(AuthContext);

    useEffect(()=>{
        fetch(`http://localhost:5000/allclasses/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyclass(data))
    },[])


    return (
        <div>
            <p>{myclass.length}</p>
        </div>
    );
};

export default MyClass;