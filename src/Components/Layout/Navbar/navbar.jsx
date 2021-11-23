import React, { Component, useState } from "react";
import { ReactComponent as Logo } from "../../../Assets/Icons/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Drawer, Button } from "antd";
import { ReactComponent as NavBtn } from "../../../Assets/Icons/navbar-btn.svg";
import { ReactComponent as LogoNav } from "../../../Assets/Icons/logo-nav.svg";


import "../../../Styles/navbar.scss";
import ReqDemoForm from "../Modal/ReqDemoForm";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const navLinks = [
    { title: "Home", url: "/home" },
    { title: "About Us", url: "/about-us" },
    { title: "Features", url: "/features" },
    { title: "Pricing Plan", url: "/pricing-plan" },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
  ];

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <React.Fragment>
      <nav className="d-none d-sm-block">
        <div className="d-flex justify-content-between">
          <div className="nav-logo d-flex">
          <LogoNav/>
          </div>
          <ul className="">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.title}
                  className="nav-item"
                  // className={currentPage === index ? "li-active" : ""}
                >
                  <NavLink className=" link" to={link.url}>
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <ReqDemoForm />
        </div>
      </nav>
      <nav className="d-sm-block d-lg-none">
        <div className="d-flex justify-content-between">
          <Link to="/home"> <LogoNav /> </Link>
          <NavBtn className="mt-2" onClick={showDrawer} />
        </div>

        <Drawer
          // title="Basic Drawer"
          placement="right"
          onClose={onClose}
          visible={visible}
          size={"large"}
        >
          <div className="drawer-nav">
            <ul className="list-unstyled">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.title}
                    className="nav-item"
                    // className={currentPage === index ? "li-active" : ""}
                  >
                    <NavLink className=" link" to={link.url} onClick={onClose} >
                      {link.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </Drawer>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
