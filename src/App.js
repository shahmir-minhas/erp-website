import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Index from "./Pages/Dashboard/index";
import AboutUs from "./Pages/About Us/about-us";
import Layout from "./Layout/index";
import Features from "./Pages/Features/Features";
import PricingPlan from "./Pages/Pricing Plan/PricingPlan";
import ContactUs from "./Pages/Contact Us/ContactUs";
import ContactInformation from "./Pages/Pricing Plan/ContactInfo";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path="/pricing-plan/contact-information" component={ContactInformation} />
          <Route path="/pricing-plan" component={PricingPlan} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/features" component={Features} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/home" component={Index} />
          <Route path="/" component={Index} />
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
