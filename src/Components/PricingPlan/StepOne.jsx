import React, { Component } from "react";
import PhoneInput from "./../../Components/Common/PhoneNumber/phoneInput";
import { Input, Select } from "antd";
import "../../Styles/Common/StepsContactInfo.scss";

const StepOne = () => {
  return (
    <React.Fragment>
      <div className="d-flex step-one">
        <div className="me-3 w-100">
          <div className="mb-4 ">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <Input placeholder="Shahmir" />
            <div className="invalid-feedback">Please enter First Name.</div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Input placeholder="example@gmial.com" />
            <div className="invalid-feedback">
              Please enter a correct Email.
            </div>
          </div>
         
        </div>

        <div className="w-100">
          <div className="mb-4 ">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <Input placeholder="Minhas" />
            <div className="invalid-feedback">Please enter Last Name.</div>
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number
            </label>
            <PhoneInput />
            <div className="invalid-feedback">
              Please enter a correct Mobile Number.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepOne;


