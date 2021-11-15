import React, { Component } from "react";
import { Breadcrumb, Tabs } from "antd";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import PathBlue from "../../Assets/Icons/Path 1001.png";
import CardTernary from "./../../Components/Feature/CardsTernary";
import Sales from "../../Assets/Icons/sales.png";
import Account from "../../Assets/Icons/account.png";
import Group from "../../Assets/Icons/group.png";
import HelpDesk from "../../Assets/Icons/help-desk.png";
import Gold from "../../Assets/Icons/gold.png";
import ShoppingCart from "../../Assets/Icons/shopping-cart.png";

import "../../Styles/Feature/Feature.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { TabPane } = Tabs;

const Features = () => {
  const featureCard = [
    {
      id: 1,
      imgSource: Sales,
      title: "Sales Information",
      body: "This is the best digital tool for all your businesses which you operate online it covers Industries like any.",
    },

    {
      id: 2,
      imgSource: Account,
      title: "Account Management",
      body: "This is the best digital tool for all your businesses which you operate online it covers Industries like any.",
    },
    {
      id: 3,
      imgSource: Group,
      title: "Employe Management",
      body: "This is the best digital tool for all your businesses which you operate online it covers Industries like any.",
    },
    {
      id: 4,
      imgSource: HelpDesk,
      title: "Help Management",
      body: "This is the best digital tool for all your businesses which you operate online it covers Industries like any.",
    },
    {
      id: 5,
      imgSource: Gold,
      title: "Asset Management",
      body: "This is the best digital tool for all your businesses which you operate online it covers Industries like any.",
    },
    {
      id: 6,
      imgSource: ShoppingCart,
      title: "Purchase History",
      body: "This is the best digital tool for all your businesses which you operate online it covers Industries like any.",
    },
  ];

  // ----------------  Slider Settings -----------------

  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <React.Fragment>
      <section className="about text-center">
        <div className="text-start">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href="">Features</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <h1>Features</h1>
        <p>
          This is the best digital tool for all your businesses which you
          operate online it covers Industries like construction,
          <br /> retail stores and gives you ease to get all the records in one
          place without worrying about.
        </p>
        <hr className="mx-auto" />
      </section>

      <div className="feature-wrapper">
        <section className="row comprehensiveOverview">
          <div className="col-4">
            <h1>
              A Comprehensive <br /> Overview Of Our
            </h1>
            <h1>Features</h1>
            <p>
              This is the best digital tool for all your businesses which you
              operate online it covers Industries like construction, retail
              stores and gives you ease to get all the records in one place
              without worrying about.
            </p>
            <Link>
              Explore All{" "}
              <span>
                <img src={PathBlue} alt="" />
              </span>{" "}
            </Link>
          </div>
          <div className="col-8">
            <div className="d-flex card-container">
              {featureCard.map((card) => (
                <CardTernary
                  key={card.id}
                  imgSource={card.imgSource}
                  title={card.title}
                  body={card.body}
                  link={card.link}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="dashboardFeature text-center">
          <h1>Breakdown Of Dashboard Feature</h1>

          <Tabs defaultActiveKey="1">
            <TabPane tab="KPI Dashboard" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="BI Dashboard" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Fleet Dashboard" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </section>
      </div>
      <section className="videoGallery text-center">
        <h1>Feature Video Gallery</h1>
        <p>
          All the features of the prism is shown in animated video. So you can
          easily know how the different feature of the prism works
        </p>

        <Slider {...settings}>
          <div>
            <div className="sliderVideoHolder"></div>
          </div>
          <div>
            <div className="sliderVideoHolder"></div>
          </div>
          <div>
            <div className="sliderVideoHolder"></div>
          </div>
          <div>
            <div className="sliderVideoHolder"></div>
          </div>
          <div>
            <div className="sliderVideoHolder"></div>
          </div>
          <div>
            <div className="sliderVideoHolder"></div>
          </div>
        </Slider>
      </section>
    </React.Fragment>
  );
};

export default Features;
