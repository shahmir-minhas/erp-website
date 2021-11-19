import React, { Component } from "react";
import "../../../Styles/hero.scss";
import Button from "./../../Common/Button/button";
import PlayIcon from "../../../Assets/Icons/play-button-o.png";


const Hero = () => {
  return (
    <React.Fragment>
      <section className="hero text-center">
        <div className="content mx-auto">
          <h4>Get a free Demo 14 days</h4>
          <h1 className="mt-1 mb-3">
            Best Solution For All Your Digital Problems
          </h1>
          <p>
            This is the best digital tool for all your businesses which you
            operate online it covers Industries like construction, retail stores
            and gives you ease to get all the records in one place without
            worrying about.
          </p>

          <div className="d-lg-flex justify-content-center mt-4">
            <Button className={"button-active"} type="button" active="active">
              Request Demo - its free
            </Button>
            <Button className={"ms-lg-3 mt-4 mt-lg-0 "} type={"button"}>
              <span className="me-2">
                <img src={PlayIcon} alt="" />
              </span>
              How it Works
            </Button>
          </div>
          <div className="video-holder shadow mx-auto">
            <div className="play-button"></div>
          </div>
        </div>

        
      </section>
    </React.Fragment>
  );
};

export default Hero;
