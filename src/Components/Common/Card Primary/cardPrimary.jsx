import React, { Component } from "react";
import "../../../Styles/cardPrimary.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Path } from "../../../Assets/Icons/Path.svg";

const CardPrimary = (props) => {
  return (
    <div className="col-12 mt-4 mt-lg-0 col-lg-4">
      <div className="cardPrimary text-center p-4">
        <div className="img-container mx-auto">
          <img src={props.imgSource} alt="" />
        </div>

        <h4>{props.title}</h4>
        <p>{props.body}</p>
        {props.link?  <Link to={props.link}>
          Learn more
          <span className="ms-1">
            <Path />
          </span>
        </Link> : null}
       
      </div>
    </div>
  );
};

export default CardPrimary;
