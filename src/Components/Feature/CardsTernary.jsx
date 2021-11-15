import React, { Component } from "react";
import "../../Styles/CardTarnary.scss";

const CardTernary = (props) => {
  return (
    <div className="col-6 ps-0">
      <div className="cardTarnary text-start p-3">
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
