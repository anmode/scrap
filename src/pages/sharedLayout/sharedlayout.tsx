import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

const SharedLayout: React.FC = () => {
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
