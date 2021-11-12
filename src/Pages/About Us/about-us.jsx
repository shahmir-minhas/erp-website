import React, { Component } from "react";
import { Breadcrumb, Card } from "antd";
import { Link } from "react-router-dom";
import "../../Styles/About Us/aboutUs.scss";
import CardPrimary from "./../../Components/Common/Card Primary/cardPrimary";
import Sketch from ".././../Assets/sketch.png";
import { ReactComponent as CheckMark } from ".././../Assets/Icons/checkMark.svg";
// import Boxes from "../../../Assets/boxes.png";
// import Store from "../../../Assets/store.png";

const AboutUs = () => {
  const visionCard = [
    {
      imgSource: Sketch,
      title: "Easy To Use",
      body: "This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records ",
      link: "/",
    },

    {
      imgSource: Sketch,
      title: "Customer Focus",
      body: "This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records ",
      link: "/",
    },
    {
      imgSource: Sketch,
      title: "Smart Solutions",
      body: "This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records ",
      link: "/",
    },
  ];
  return (
    <React.Fragment>
      <div className="about text-center">
        <div className="text-start">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href="">About Us</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <h1>About Us</h1>
        <p>
          This is the best digital tool for all your businesses which you
          operate online it covers Industries like construction, <br /> retail
          stores and gives you ease to get all the records in one place without
          worrying about.
        </p>
        <hr className="mx-auto" />
      </div>

      <div className="vision">
        <h1>Our Vision</h1>
        <p>
          Our vision is to establish ourselves as any time value provider in the
          minds of our customers by providing innovative software solutions. We
          dream to be a trusted partner to all our customers and help them
          overcome their business challenges with our updated software. Our
          vision is to remove the hectic of our customers in their day to day
          business process and make their business process friendly to all the
          departments in their organization.
        </p>

        <div className="visionCard">
          <div className="row justify-content-between">
            {visionCard.map((card) => (
              <CardPrimary
                imgSource={card.imgSource}
                title={card.title}
                body={card.body}
                link={card.link}
              />
            ))}
          </div>
        </div>

      </div>
        <div className="ourMission">
          <h1>Our Mission </h1>
          <p>
            Our journey starts with our mission, which is persistent. It affirms
            our purpose as a company and serves as the standard against which we
            weigh our actions and decisions.
          </p>
          <ul className="list-unstyled">
            <li>
              {/* <span>{CheckMark}</span> */}
              <h4>
                We provide best solution which include useful features in a very
                low price.
              </h4>
            </li>
            <li>
              <h4>
                We provide best solution which include useful features in a very
                low price.
              </h4>
            </li>
            <li>
              <h4>
                We provide best solution which include useful features in a very
                low price.
              </h4>
            </li>
            <li>
              <h4>
                We provide best solution which include useful features in a very
                low price.
              </h4>
            </li>
          </ul>
        </div>
    </React.Fragment>
  );
};

export default AboutUs;
