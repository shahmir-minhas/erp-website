import React, { Component, useState } from "react";
import { DatePicker, Input, Switch, Checkbox } from "antd";
import CreditCard from "../../Assets/Icons/Mask Group 24.svg";
import Visa from "../../Assets/Icons/download.png";
import QuestionIcon from "../../Assets/Icons/Icon awesome-question-circle.png";

const StepFour = () => {
  const [SwitchState, setSwitchState] = useState("On");


  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  const handleSwitch = (check) => {
    check ? setSwitchState("On") : setSwitchState("Off");
  };
  return (
    <React.Fragment>
      <div className="step-four">
        <h6>We Accept</h6>
        <img src={CreditCard} alt="" />
        <img src={Visa} alt="" />
        <div className="d-flex flex-wrap flex-lg-nowrap">
          <div className="mb-4 me-3 ">
            <label htmlFor="nameOnCard" className="form-label">
              Name on Card
            </label>
            <Input />
          </div>
          <div className="mb-4">
            <label htmlFor="Credit Card Number" className="form-label">
              Credit Card Number
            </label>
            <Input />
            <div className="invalid-feedback">
              Please enter Credit Card Number
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap flex-lg-nowrap">
          <div className="me-4">
            <label htmlFor="expireDate" className="form-label">
              Expire Date
            </label>
            <br />
            <DatePicker onChange={onChange}/>
          </div>

          <div className="mb-4 cvc-input">
            <div className="d-flex justify-content-lg-between">
              <label htmlFor="cvc" className="form-label mt-2 mt-lg-0">
                CVC
              </label>
              <img src={QuestionIcon} alt="" className="d-none d-lg-block" />
            </div>
            <Input />
          </div>
        </div>
        <div className="my-3">
          <label htmlFor="autoReview" className="form-label mb-0">
            Auto Review
          </label>
          <br />
          <Switch onChange={handleSwitch} />
          <span className="switch-value">{SwitchState}</span>
        </div>
        <div className="mb-5">
          <Checkbox>
            By checking this box. You agree to ERP’s terms and services and
            confirm you have read ERP’s privacy policy. You also agree to
            receive emails from ERP regarding product or service updates or any
            other marketing material. To ensure continuous service, your
            membership will be auto-renewed unless canceled.
          </Checkbox>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepFour;
