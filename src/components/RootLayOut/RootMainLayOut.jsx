import React from "react";
import Navbar from "./Navbar/Index";
import Header from "./Header/Index";
import Footer from "./Footer/Index";
import { Outlet } from "react-router-dom";

const RootMainLayOut = () => {
  return <div>
    <Header/>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>;
};

export default RootMainLayOut;
