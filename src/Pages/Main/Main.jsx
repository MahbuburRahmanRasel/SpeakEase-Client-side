import React from 'react';
import Navbar from '../../components/Navabar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Main = () => {
    return (
        <div>
             <Navbar />
      <div className="md:min-h-[calc(100vh-260px)]">
     
        <Outlet />
      
      </div>
      <Footer />
      <ScrollRestoration />
            
        </div>
    );
};

export default Main;