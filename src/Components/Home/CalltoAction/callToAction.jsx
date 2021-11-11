import React, { Component } from "react";
import "../../../Styles/callToAction.scss";
import Button from "./../../Common/Button/button";

const CallToAction = () => {
  return (
    <section className="callToAction">
      <div className="mx-auto mb-4">
        <h1>Get A Free demo</h1>
        <p>
          Get started with a new account in no time. Try it for 14 days. No
          credit card required.
        </p>
      </div>

      <Button className="button-active">Request Demo - It's free</Button>
    </section>
  );
};

export default CallToAction;
