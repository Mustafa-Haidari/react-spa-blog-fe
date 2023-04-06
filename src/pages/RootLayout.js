import React from "react";
import { Outlet } from "react-router-dom";
// import Footer from "../Components/Footer";
import Header from "../Components/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default RootLayout;
