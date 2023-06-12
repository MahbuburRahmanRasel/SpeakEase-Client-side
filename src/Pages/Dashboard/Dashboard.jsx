import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='flex'>
          <div className='flex-none'>
          <Sidebar />
          </div>
           <div className='grow'>
            <div><p className='text-3xl font-bold text-center my-5 text-theme-3-600'>Welcome {user.displayName}</p></div>
           <Outlet />
           </div>
        </div>
    );
};

export default Dashboard;