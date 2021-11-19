import React, { Component } from "react";
import { ReactComponent as Logo } from "../../../Assets/Icons/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "../../../Styles/navbar.scss";

import Button from "./../../Common/Button/button";
import ReqDemoForm from "../Modal/ReqDemoForm";

const NavBar = () => {
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

  return (
    <nav className="d-none d-sm-block">
      <div className="d-flex justify-content-between">
        <div className="nav-logo d-flex">
          <Logo />
          <h1>Prism</h1>
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
        <ReqDemoForm/>
      </div>
    </nav>
  );
};

export default NavBar;
