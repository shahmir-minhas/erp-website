import React, { Component } from "react";
import "../../../Styles/cardSecondary.scss";
import { Link } from "react-router-dom";
import { ReactComponent as PathBlue } from "../../../Assets/Icons/PathBlue.svg";

const CardSecondary = (props) => {
  return (
    <div className="col-4 ps-0">
      <div className="cardSecondary text-start p-3">
        <div className="img-container">
          <img src={props.imgSource} alt="" className="img-card-secondary" />
        </div>

        <h6>{props.title}</h6>
        <p>{props.body}</p>
        <Link to={props.link}>
          learn more{" "}
          <span>
            <PathBlue />
          </span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default CardSecondary;
