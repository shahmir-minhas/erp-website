import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Hero from "../../Components/Home/Hero/hero";
import Clients from "./../../Components/Home/Clients/clienst";
import Solutions from "./../../Components/Home/Solutions/solutions";
import Analytics from "../../Components/Home/Analytics/analytics";
import AppForDriver from "./../../Components/Home/AppForDriver/appDriver";
import EveryThing from "../../Components/Home/EverytingYouNeed/everytingYouNeed";
import CallToAction from "../../Components/Home/CalltoAction/callToAction";
import ChatIcon from "../../Assets/Icons/chat.png";
import '../../Styles/Dashboard/Dashboard.scss';

// render home componets
const Index = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <Layout> */}
        <Hero />
        <Clients />
        <Solutions />
        {
          // analytics chart
        }
        <Analytics />
        <AppForDriver />
        <EveryThing />
        <CallToAction />
        {/* </Layout> */}
        <div className="messenger justify-item-center">
          <img src={ChatIcon} alt="" />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Index;
