import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/navbar';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <section className="section">
        <Outlet />
      </section>
    </>
  );
};

export default SharedLayout;
