import React from 'react';
import NavBar from '../Home/NavBar/index';
import Footer from '../Home/Footer/index';
import { Outlet } from 'react-router-dom'; 

export const HomePage = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}
