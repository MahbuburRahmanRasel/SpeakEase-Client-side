import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
          <div className='flex-none'>
          <Sidebar />
          </div>
           <div className='grow'>
           <Outlet />
           </div>
        </div>
    );
};

export default Dashboard;