import React, { Component } from "react";
import "../../Styles/CardTarnary.scss";

const CardTernary = (props) => {
  return (
    <div className="col-6 border pt-4 ps-4 pe-2 pb-1">
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
