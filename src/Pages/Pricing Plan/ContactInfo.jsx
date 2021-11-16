import React, { Component } from "react";
import { Breadcrumb, Switch, Steps, Button, message } from "antd";
import { Link } from "react-router-dom";

import StepOne from "../../Components/PricingPlan/StepOne";
import StepTwo from "../../Components/PricingPlan/StepTwo";
import StepThree from "../../Components/PricingPlan/StepThree";
import StepFour from "../../Components/PricingPlan/StepFour";
// import '../../Styles/PricingPlan/PricingPlan.scss';
import "../../Styles/PricingPlan/ContactInfo.scss";

const ContactInformation = () => {
  const { Step } = Steps;

  const [current, setCurrent] = React.useState(0);
  const [switchState, setswitchState] = React.useState(true);
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

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const form = () => {
    return <div>i am form 1</div>;
  };
  const handleSwitch = (check) =>{
    setswitchState(check);
};

  return (
    <React.Fragment>
      <div className="contact-info-wrapper">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/pricing-plan">Pricing Plan</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/pricing-plan/contact-info">Contact Information</Link>
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="d-flex">
          <div className="contact-info">
            <Link to="/pricing-plan">Back</Link>
            <div className="contact-info-form me-3">
              <Steps current={current}>
                {steps.map((item) => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>

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
                </form>
              </div>

              <div className="steps-action d-flex justify-content-between">
                <div>note</div>
                <div>
                  {current > 0 && (
                    <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                      Back
                    </Button>
                  )}
                  {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                      Next
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button
                      type="primary"
                      onClick={() => message.success("Processing complete!")}
                    >
                      Confirm Payment
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="order-summary">
            <p>
              Monthly <Switch className="" defaultChecked onChange={handleSwitch}/> Yearly
              {switchState?<Link className="ms-1">Save 30%</Link>:null}
            </p>
            <div className="order-summary-card">
              <h4>Order Summary</h4>
              <hr />
              <div className="d-flex justify-content-lg-between">
                <h4>Business</h4>
                <p>
                  DAR 250 / year <br /> <span>you save 10%</span>
                </p>
              </div>
              <hr />
              <h6>Feature included in business plan.</h6>
              <ul>
                <li>aaaa</li>
                <li>aaaa</li>
                <li>aaaa</li>
                <li>aaaa</li>
                <li>aaaa</li>
              </ul>
              <hr />
              <div>price summary</div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer">

      </div>
    </React.Fragment>
  );
};

export default ContactInformation;
