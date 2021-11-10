import React, { Component } from "react";
import { ReactComponent as Logo } from "../../../Assets/Icons/logo.svg";
import {Link} from 'react-router-dom';
import "../../../Styles/navbar.scss";
import Button from './../../Common/Button/button';

const NavBar = () => {
    const navLinks = [
    {title: "Home", url: "/"},
    {title: "About Us", url: "/about-us"},
    {title: "Features", url: "/features"},
    {title: "Pricing Plan", url: "/pricing-plan"},
    {
      title: "Contact Us",
      url: "/contact-us"
    },
  ];
  return (
    <nav>
      <div className="d-flex justify-content-between">
        <div className="nav-logo d-flex">
          <Logo />
          <h1>Prism</h1>
        </div>

      
        {/* links */}

        <ul className="">
          {navLinks.map((link) => {
            return (
              <li
                key={link.title}
                className="nav-item"
                // className={currentPage === index ? "li-active" : ""}
              >
                <Link className="nav-link link" to={link.url}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="" type="button">
          Request Demo
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
