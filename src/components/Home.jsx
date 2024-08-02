import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CopyrightFooter from "./CopyrightFooter";

const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <CopyrightFooter />
    </div>
  );
};

export default Home;
