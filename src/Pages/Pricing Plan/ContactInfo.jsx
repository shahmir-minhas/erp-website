import React, { Component, useEffect, useState } from "react";
import { Breadcrumb, Switch, Steps, Button, message, Modal } from "antd";
import { Link, useParams } from "react-router-dom";

import StepOne from "../../Components/PricingPlan/StepOne";
import StepTwo from "../../Components/PricingPlan/StepTwo";
import StepThree from "../../Components/PricingPlan/StepThree";
import StepFour from "../../Components/PricingPlan/StepFour";
import CheckMark from "../../Assets/Icons/checkMark-OrderSummary.svg";
import Congratulation from "../../Assets/Group 2600.png";
import { ReactComponent as BackArrow } from "../../Assets/Icons/Icon material-arrow_back.svg";

import "../../Styles/PricingPlan/ContactInfo.scss";

const { Step } = Steps;

const ContactInformation = () => {
  // Hooks
  // const { id } = useParams();
  // useEffect(()=>{
  //   console.log(id);
  //   // api call here

  // });

  const [current, setCurrent] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [switchState, setswitchState] = useState(true);

  // objects
  const steps = [
    {
      title: "Contact Information",
    },
    {
      title: "Business Details",
    },
    {
      title: "Billing Address",
    },
    {
      title: "Payment Information",
    },
  ];

  // Methods

  // ---------- handling Stepper here --------------------
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  // ---------- handling Switch here --------------------
  const handleSwitch = (check) => {
    setswitchState(check);
  };

  // ---------- handling model methods here --------------------

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <React.Fragment>
      {/* 
            Modal 
      */}
      <Modal
        // title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="modal-congrats"
      >
        <div className=" text-center">
          <img src={Congratulation} alt="" />
          <h4>Your Transaction is Successful</h4>
          <p>
            You have successfully subscribed to our "Business Plan". Your
            credentials has been sent to your email address
            <strong>bilal@gmail.com</strong>
          </p>
          <Link to="/">
            <button htmlType="button" className="btn-go-home">
              Go Home
            </button>
          </Link>
        </div>
      </Modal>

      {/* 
          Contact Stepper Code 
      */}

      <div className="contact-info-wrapper">
        <Breadcrumb className="d-none d-lg-block">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/pricing-plan">Pricing Plan</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/pricing-plan/contact-info">Contact Information</Link>
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="d-flex flex-wrap flex-lg-nowrap">
          <div className="contact-info">
            <Link to="/pricing-plan">
              {" "}
              <BackArrow /> Back
            </Link>
            <div className="contact-info-form me-3">
              <div className="d-none d-lg-block">
                <Steps current={current}>
                  {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                  ))}
                </Steps>
              </div>

              {/* <div className="steps-content">{steps[current].content}</div> */}
              <div className="steps-content">
                <form action="" className="needs-validation mt-5">
                  {steps[current] === steps[0] ? (
                    <StepOne />
                  ) : steps[current] === steps[1] ? (
                    <StepTwo />
                  ) : steps[current] === steps[2] ? (
                    <StepThree />
                  ) : steps[current] === steps[3] ? (
                    <StepFour />
                  ) : null}

                  <div className="steps-action d-flex flex-wrap flex-lg-nowrap justify-content-between">
                    {steps[current] === steps[0] ? (
                      <div className="notify justify-content-center">
                        <p>
                          Note : Please fill all the details to confirm your
                          payment
                        </p>
                      </div>
                    ) : (
                      <div> </div>
                    )}

                    <div>
                      {current > 0 && (
                        <Button
                          style={{ margin: "0 8px 0 0" }}
                          onClick={() => prev()}
                        >
                          Back
                        </Button>
                      )}
                      {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                          Next
                        </Button>
                      )}
                      {current === steps.length - 1 && (
                        <Button type="primary" onClick={showModal}>
                          Confirm Payment
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="order-summary">
            <p>
              Monthly
              <span className="mx-2">
                <Switch className="" defaultChecked onChange={handleSwitch} />
              </span>
              Yearly
              {switchState ? (
                <Link to="/pricing-plan" className="ms-2">
                  Save 30%
                </Link>
              ) : null}
            </p>

            <div className="order-summary-card">
              <div className="card-padding">
                <h5 className="mt-3">Order Summary</h5>
              </div>
              <hr />
              <div className="card-padding">
                <div className="d-flex justify-content-between text-end">
                  <h5 className="m-0">Business</h5>
                  <p className="m-0">
                    SAR 250 <span>/ year</span> <br /> <span>You save 10%</span>
                  </p>
                </div>
              </div>
              <hr />
              <div className="card-padding-summary ">
                <h6>Feature included in business plan.</h6>
                <ul className="list-unstyled">
                  <li>
                    <img src={CheckMark} alt="" /> All limited links
                  </li>
                  <li>
                    <img src={CheckMark} alt="" /> Own analytic program
                  </li>
                  <li>
                    <img src={CheckMark} alt="" /> Chat Support
                  </li>
                  <li>
                    <img src={CheckMark} alt="" /> Optimize Hashtags
                  </li>
                </ul>

                <hr />
                <div className="card-padding pricing-summary">
                  <h6>Price summary</h6>
                  <hr />
                  <ul className="list-unstyled m-0">
                    <li>
                      <div className="d-flex justify-content-between">
                        <p>Plan Price</p>
                        <p>SAR 250</p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between">
                        <p>VAT Total</p>
                        <p>SAR 10</p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between">
                        <p>VAT Total</p>
                        <p>SAR 10</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </React.Fragment>
  );
};

export default ContactInformation;
