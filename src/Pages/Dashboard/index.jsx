import React, { Component } from "react";
import Layout from "./../../Layout/index";
import { BrowserRouter } from "react-router-dom";
import Hero from "../../Components/Home/Hero/hero";
import Clients from './../../Components/Home/Clients/clienst';
import Solutions from './../../Components/Home/Solutions/solutions';
import Analytics from "../../Components/Home/Analytics/analytics";
import AppForDriver from './../../Components/Home/AppForDriver/appDriver';
import EveryThing from "../../Components/Home/EverytingYouNeed/everytingYouNeed";
import CallToAction from "../../Components/Home/CalltoAction/callToAction";

const Index = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
        <Hero/>
        <Clients/>
        <Solutions/>
        <Analytics/>
        <AppForDriver/>
        <EveryThing/>
        <CallToAction/>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Index;