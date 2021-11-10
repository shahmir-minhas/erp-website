import React, { Component } from "react";
import "../../../Styles/solutions.scss";
import CardPrimary from "./../../Common/Card Primary/cardPrimary";
import Sketch from '../../../Assets/sketch.png';
import Boxes from '../../../Assets/boxes.png';
import Store from '../../../Assets/store.png';

const Solutions = () => {
  const cards = [
    {
      imgSource: Sketch,
      title: "Construction Industries",
      body: "This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records",
      link: "/",
    },
    {
      imgSource:Store ,
      title: "Construction Retail Store",
      body: "This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records",
      link: "/",
    },
    {
      imgSource: Boxes,
      title: "Construction Warehouses",
      body: "This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records",
      link: "/",
    },
  ];

  return (
    <React.Fragment>
      <div className="solutions">
        <div className="content">
          <h1>We Provide Solutions For Different Business</h1>
          <p>
            This is the best digital tool for all your businesses which you
            operate online it covers Industries like construction, retail
            <br /> stores and gives you ease to get all the records in one place
            without worrying about.
          </p>
          <div className="d-flex justify-content-between mt-5">
            {cards.map((card) => (
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
    </React.Fragment>
  );
};

export default Solutions;
