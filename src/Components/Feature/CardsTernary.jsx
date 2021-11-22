import React, { Component } from "react";
import "../../Styles/CardTarnary.scss";

const CardTernary = (props) => {
  return (
    <div className="col-12 col-lg-6 border border-sm-none pt-4 ps-0 ps-lg-4 pe-0 pe-lg-2 pb-1">
      <div className="cardTarnary text-start pt-1">
        <div className="d-flex">
          <div className="img-container">
            <img src={props.imgSource} alt="" className="img-card-secondary" />
          </div>
          <div>
            <h6>{props.title}</h6>
            <p>{props.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTernary;
