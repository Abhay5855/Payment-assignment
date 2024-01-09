import React from "react";
import NavbarContainer from "../components/navbar/NavbarContainer";
import SidebarContainer from "../components/sidebar/SidebarContainer";
import MainContainer from "../components/main/MainContainer";
import "./payment.css";
const Payment = () => {
  return (
    <div className="app__main">
      <div className="app__main__navbar">
        <NavbarContainer />
      </div>
      <div className="app__main__sidebar">
        <SidebarContainer />
      </div>
      <div className="app__main__notes">
        <MainContainer />
      </div>
    </div>
  );
};

export default Payment;
