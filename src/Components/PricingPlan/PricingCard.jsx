import React, { Component } from "react";
import Breifcase from "../../Assets/Icons/Group 8.png";
import "../../Styles/PricingCards.scss";
import CheckMarkIcon from "../../Assets/Icons/Icon material-check.svg";
import CheckMarkIconGrey from "../../Assets/Icons/Icon material-check Grey.svg";
import { Link } from 'react-router-dom';

const PricingCard = ({ data }) => {
  // console.log('props', props);
  const { isActive, price, title, list, key } = data;
  return (
    <React.Fragment>
      <div
        className={`pricing-card text-center position-relative mx-2 ${
          isActive ? "pricing-card-active" : ""
        }`}
      >
        {isActive ? (
          <div className="strip position-absolute">Recommended</div>
        ) : null}

        <div className="price-img-container rounded-circle mx-auto">
          <span>
            <img src={Breifcase} alt="" />
          </span>
        </div>
        <div className="price-plan-header">
          <p>
            $ {price} <span>/ month</span>
          </p>
          <h6>{title}</h6>
          <p>Some of the basic feature is included</p>
        </div>
        <ul className="list-unstyled text-start">
          {list.map((i) => (
            <li key={i.id}>
              <p className={`${i.isAvailable ? "" : "feature-not-available"}`}>
                <span>
                  <img src={i.isAvailable?CheckMarkIcon:CheckMarkIconGrey} alt="" />
                  
                </span>
                {i.feature}
              </p>
            </li>
          ))}
        </ul>
        <Link to={`/pricing-plan/contact-information/${key}`} > 
        <button className={`${isActive ? "btn-active" : ""}`}>
          Choose Plan
        </button></Link>
      </div>
    </React.Fragment>
  );
};

export default PricingCard;
