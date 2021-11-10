import React, { Component } from "react";
import Layout from "./../../Layout/index";
import { BrowserRouter } from "react-router-dom";
import Hero from "../../Components/Home/Hero/hero";
import Clients from './../../Components/Home/Clients/clienst';
import Solutions from './../../Components/Home/Solutions/solutions';

const Index = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
        <Hero/>
        <Clients/>
        <Solutions/>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Index;
