import React, { Component } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "../../Styles/About Us/aboutUs.scss";
import CardPrimary from "./../../Components/Common/Card Primary/cardPrimary";
import Sketch from "../../Assets/sketch.png";
import Box from "../../Assets/boxes.png";
import Graph from "../../Assets/graph.png";
import CheckMarkBlue from "../../Assets/Icons/checkMarkBlu.png";

const AboutUs = () => {
  const visionCard = [
    {
      id: 1,
      imgSource: Sketch,
      title: "Easy To Use",
      body: "This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records ",
    },

    {
      id: 2,
      imgSource: Box,
      title: "Customer Focus",
      body: "This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records ",
    },
    {
      id: 3,
      imgSource: Sketch,
      title: "Smart Solutions",
      body: "This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records ",
    },
  ];
  const missionPoints = [
    {
      id: 1,
      imgSource: CheckMarkBlue,
      body: "We provide best solution which include useful features in a very low price.",
    },

    {
      id: 2,
      imgSource: CheckMarkBlue,
      body: " Deliver on time & qualitative features to customer and create a family of happy & satisfied customers with long lasting relationship.",
    },
    {
      id: 3,
      imgSource: CheckMarkBlue,
      body: "Develop innovative and environment friendly solution to save business information in digital form.",
    },
  ];

  const valueProvideCard = [
    {
      id: 1,
      imgSource: Sketch,
      title: "Quality",
      body: "This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records ",
    },

    {
      id: 2,
      imgSource: Box,
      title: "Integrity",
      body: "This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records ",
    },
    {
      id: 3,
      imgSource: Sketch,
      title: "Trust",
      body: "This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records ",
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
                key={card.id}
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
        <ul className="list-unstyled pt-4">
          {missionPoints.map((points) => (
            <li>
              <div className="d-flex">
                <img src={points.imgSource} alt="" className="me-3" />
                <h5>{points.body}</h5>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="valueWeProvide">
        <h1>The Values We Provide</h1>
        <p>
          Our journey starts with our mission, which is persistent. It affirms
          our purpose as a company and serves as the standard against which we
          weigh our actions and decisions.
        </p>
        <div className="row justify-content-between ">
          {valueProvideCard.map((card) => (
            <CardPrimary
              key={card.id}
              imgSource={card.imgSource}
              title={card.title}
              body={card.body}
              link={card.link}
            />
          ))}
        </div>
      </div>
      <div className="whyPrism">
        <div className="row">
          <div className="col">
            <h1>Why Prism ?</h1>
            <p>
              This is the best digital tool for all your businesses which you
              operate online it covers Industries like construction, retail
              stores and gives you ease to get all the records in one place
              without worrying about.This is the best digital tool for all your
              businesses which you operate online it covers Industries like
              construction, retail stores and gives you ease to get all the
              records in one place without worrying about.This is the best
              digital tool for all your businesses which you operate online it
              covers Industries like construction, retail stores and gives you
              ease to get all the records in one place without worrying
              about.This is the best digital tool for all your businesses which
              you operate online it covers Industries like construction, retail
              stores and gives you ease to get all the records in one place
              without worrying about.
            </p>
            <button className="button-active">Request Demo - It's free</button>
          </div>
          <div className="col justify-content-center graph">
            <img src={Graph} alt=""  />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
