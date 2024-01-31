// SharedLayout.js
import React from 'react';
import Navbar from '../navbar/navbar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};

export default SharedLayout;
