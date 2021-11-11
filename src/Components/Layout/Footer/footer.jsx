import React, { Component } from "react";
import "../../../Styles/footer.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Prism } from "../../../Assets/Icons/Prism.svg";
import { ReactComponent as Facebook } from "../../../Assets/Icons/Icon awesome-facebook-square.svg";
import { ReactComponent as Twitter } from "../../../Assets/Icons/Icon awesome-twitter.svg";
import { ReactComponent as Linked } from "../../../Assets/Icons/Icon awesome-linkedin.svg";
import { ReactComponent as Insta } from "../../../Assets/Icons/Icon awesome-instagram.svg";
import { ReactComponent as Youtube } from "../../../Assets/Icons/Icon awesome-youtube.svg";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container">
          <div className="row mb-5">
            <div className="col">
              <div className="d-flex prism-logo">
                <Prism />
                <h6 className="prism">Prism</h6>
              </div>

              <p className="lh-lg">
                This is the best digital tool for all your <br /> businesses
                which you operate online <br /> it covers Industries like
                construction, <br /> retail stores and gives you ease to <br />{" "}
                get all the records in one place <br />
                without worrying about.
              </p>
            </div>
            <div className="col">
              <h6>Quick Links</h6>
              <ul className="navbar-nav quick-links">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/our-services">Our Servies</Link>
                </li>
                <li>
                  <Link to="contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/pricing-plan">Pricing Plan</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h6>Contact Information</h6>
              <ul className="list-unstyled information">
                <li>
                  <p>JMM technologies Mubashir plaza</p>
                </li>
                <li>
                  <p>0900-78601</p>
                </li>
                <li>
                  <Link to="www.jmmtechnologies.ltd">
                    www.jmmtechnologies.ltd
                  </Link>
                </li>
                <li>
                  <h6>Follow Us</h6>
                </li>
                <li>
                  <ul className="d-flex list-unstyled social-icons">
                    <li>
                      <Link>
                        <Facebook />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <Twitter />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <Linked />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <Insta />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <Youtube />
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bottom-bar d-flex justify-content-around">
        <div><p className="extra">© Copyright Prism 2021. All Rights Reserved.</p></div>
          <p className="me-5">© Copyright Prism 2021. All Rights Reserved.</p>
          <div>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
