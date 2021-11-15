import React, { Component } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Input, Select } from "antd";
import PhoneInput from "./../../Components/Common/PhoneNumber/phoneInput";
import "../../Styles/ContactUs/ContactUs.scss";

const ContactUs = () => {
  const { Option } = Select;
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

  return (
    <React.Fragment>
      <section className="contact-us text-center">
        <div className="text-start">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href="">Contact Us</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <h1>Contact Us</h1>
        <hr className="mx-auto" />
        <p>
          If you have any queries in your mind please send us a message or email
          us which is given below.
        </p>
      </section>

      <section className="contact-container justify-content-center mx-auto text-start">
        <div className="row justify-content-lg-between">
          <div className="col-7 contact-form">
            <h3>Contact Us</h3>

            <form action="" className="needs-validation">
              <div className="row">
                <div className="col">
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

                <div className="col">
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
                <div className="invalid-feedback">Please write a message.</div>
              </div>
              <div className="mb-3 text-end ">
                <input
                  type="reset"
                  value="Reset Form"
                  className="form-control text-danger reset-btn"
                />
              </div>
              <input type="submit" value="Submit" className="btn-submit" />
            </form>
          </div>

          <div className="col-5 information text-center">
            <h3>Conatact Information</h3>
            <div className="d-flex">
                <img src="" alt="" />
                <p>Mubashir Plaza Near Kips Academy, Abbotabad</p>
            </div>
            <div className="d-flex">
                <img src="" alt="" />
                <p>+92 343 102 329578 </p>
            </div>
            <div className="d-flex">
                <img src="" alt="" />
                <p>erpadmin@erp.com</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
