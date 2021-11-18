import React, { Component, useEffect, useState } from "react";
import { Breadcrumb, Input, Select } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";

import PhoneInput from "./../../Components/Common/PhoneNumber/phoneInput";
import LocationIcon from "../../Assets/Icons/Icon metro-location.png";
import Phone from "../../Assets/Icons/Icon material-phonelink-ring.png";
import Mail from "../../Assets/Icons/Icon material-email.png";
import Plane from "../../Assets/Group 2601.svg";

import "../../Styles/ContactUs/ContactUs.scss";
// Destructuring Options from Select
const { Option } = Select;

const ContactUs = () => {
  //hooks
  const [formSubmit, setfromSubmit] = useState(false);

  const location = useHistory();

  useEffect(() => {
    console.log("effect");
    return location.listen(() => {
      setfromSubmit(false);
    });
  });

  const history = useHistory();
  console.log(location);
  console.log(history);

  //objects
  const country = [
    "Pakitsan",
    "USA",
    "India",
    "UAE",
    "Iran",
    "Nepal",
    "Saudia",
    "Amrica",
    "Canada",
    "Afghannistan",
  ];
  const handleSubmit = (e) => {
    setfromSubmit(true);
    // e.preventDefault();
  };

  return (
    <React.Fragment>
      <section className="contact-us text-center">
        <div className="text-start">
          <Breadcrumb>
            <Breadcrumb.Item>
              Home
              {/* <Link to="/home">Home</Link> */}
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/contact-us">Contact Us</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <h1>Contact Us</h1>
        <hr className="mx-auto" />
        <p>
          If you have any queries in your mind please send us a message or email
          us which is given below.
        </p>
        <section className="contact-container justify-content-center text-start me-auto">
          <div className="d-flex justify-content-between">
            <div className=" contact-layout">
              {formSubmit ? (
                <div className="thanks-message text-center">
                  <img src={Plane} alt="" />
                  <h1>Thanks for reaching out</h1>
                  <p>Your message has been submitted</p>
                  <p>Our team will get back to you soon</p>
                  <p>
                    Your message will be overlooked and you will be contacted{" "}
                    <br /> from our department within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="form">
                  <h3>Contact Us</h3>

                  <form action="" className="needs-validation mt-5">
                    <div className="d-flex">
                      <div className="me-3 w-100">
                        <div className="mb-3 ">
                          <label htmlFor="userName" className="form-label">
                            Full Name
                          </label>
                          <Input placeholder="Shahmir Minhas" />
                          <div className="invalid-feedback">
                            Please enter a correct User Name.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="mobileNumber" className="form-label">
                            Mobile Number
                          </label>
                          <PhoneInput />
                          <div className="invalid-feedback">
                            Please enter a correct Mobile Number.
                          </div>
                        </div>
                      </div>

                      <div className="w-100">
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <Input placeholder="example@gmial.com" />
                          <div className="invalid-feedback">
                            Please enter a correct Email.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="country" className="form-label">
                            Country
                          </label>
                          <div>
                            <Select
                              className="form-control"
                              showSearch
                              placeholder="Select Country"
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                              showArrow={false}
                            >
                              {country.map((list) => (
                                <Option value={list}>{list}</Option>
                              ))}
                            </Select>
                          </div>

                          <div className="invalid-feedback">
                            Please Select a Country.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 ">
                      <label htmlFor="subject" className="form-label">
                        Subject (Optional)
                      </label>
                      <Input placeholder="Subject" />
                    </div>
                    <div className="mb-3 ">
                      <label htmlFor="subject" className="form-label">
                        Message
                      </label>
                      <Input placeholder="" className="text-area" />
                      <div className="invalid-feedback">
                        Please write a message.
                      </div>
                    </div>
                    <div className="mb-5 mt-5 text-end ">
                      <input
                        type="reset"
                        value="Reset Form"
                        className="form-control text-danger reset-btn"
                      />
                    </div>
                    <input
                      type="submit"
                      value="Submit"
                      className="btn-submit"
                      onClick={handleSubmit}
                    />
                  </form>
                </div>
              )}
            </div>

            <div className=" information">
              <h3 className="text-center">Contact Information</h3>
              <div className="mt-5">
                <div className="d-flex mb-4">
                  <img
                    src={LocationIcon}
                    alt=""
                    className="me-4 ci-icon-location"
                  />
                  <p>
                    Mubashir Plaza Near Kips <br /> Academy, Abbotabad
                  </p>
                </div>
                <div className="d-flex mb-4">
                  <img src={Phone} alt="" className="me-4 ci-icon-phone" />
                  <p>
                    +92 343 102 329578 <br />
                    +92 343 102 329578
                  </p>
                </div>
                <div className="d-flex mb-4">
                  <img src={Mail} alt="" className="me-4 ci-icon-mail" />
                  <p>
                    erpadmin@erp.com <br />
                    erphead@erp.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div className="spacer-contact"></div>
    </React.Fragment>
  );
};

export default ContactUs;
