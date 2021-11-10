import React, { Component } from "react";
import "../../../Styles/cardPrimary.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Path } from "../../../Assets/Icons/Path.svg";

const CardPrimary = (props) => {
  return (
    <div className="cardPrimary text-center p-4">
      <div className="img-container mx-auto">
        <img src={props.imgSource} alt="" />
      </div>

      <h4>{props.title}</h4>
      <p>{props.body}</p>
      <Link to={props.link}>learn more <span><Path/></span> </Link>
    </div>
  );
};

export default CardPrimary;
