import React, { Children, Component } from "react";
import Footer from "../Components/Layout/Footer/footer";
import NavBar from "../Components/Layout/Navbar/navbar";
import ChatIcon from "../Assets/Icons/chat.png";
const Layout = (props) => {
  return (
    <React.Fragment>
      <NavBar />

      <main>{props.children}</main>

      <Footer />
      <div className="messenger justify-item-center">
        <img src={ChatIcon} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Layout;
