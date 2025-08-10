import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function RootLayout() {
  return (
    <div >
      <Navbar />
      <Outlet />  {/* <-- Where child routes like Home and About will render */}
      <Footer />
    </div>
  );
}

export default RootLayout;
