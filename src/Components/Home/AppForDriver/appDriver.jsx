import React, { Component } from "react";
import Mobile from "../../../Assets/App Picture.png";
import GooglePlay from "../../../Assets/Icon Google play.png";
import CheckMark from "../../../Assets/Group 2562.png";
import StarIcon from "../../../Assets/Icons/Star Icon.png";

import "../../../Styles/appForDriver.scss";

const AppForDriver = () => {
  return (
    <section className="appDriver">
      <h1>Our App For Drivers</h1>
      <p>
        We also have app for drivers where they can easily track their
        deliveries and saved the records of their deliveries how many they
        delivered and how many are remaining. And the record is also fetched in
        prsim.
      </p>

      <div className="d-flex justify-content-around app-content">
        <img src={Mobile} alt="" />

        <div className="app-points">
          <h3>Our App Features</h3>
          <ul className="list-unstyled">
            <li>
              <img src={CheckMark} alt="" />
              <hr />
              <p>Track Record Of Deliveries</p>
            </li>

            <li>
              <img src={CheckMark} alt="" />
              <hr />
              <p>How Many Assigned Orders</p>
            </li>

            <li>
              <img src={CheckMark} alt="" />
              <hr />
              <p>How Many Are Delivered</p>
            </li>

            <li>
              <img src={CheckMark} alt="" />
              <hr />
              <p>How Many Are Remaining</p>
            </li>
            <li>
              <img src={CheckMark} alt="" />
              <hr />
              <p>Daily Status Of Orders</p>
            </li>
            <li>
              <img src={CheckMark} alt="" />
              <hr />
              <p>Electronic Signatures</p>
            </li>
            <div class="tick-horizontal-divider"></div>
          </ul>

          <img src={GooglePlay} alt="" className="google-play-store" />
        </div>

        {/* <div>
          <h3>Our App Features</h3>
          <div className="d-flex">
            <div className="vertical-check position-relative">
              <div className="cirlce rounded-circle position-absolute top-0 start-0 translate-middle"></div>

              <div className="circle-blue rounded-circle text-center position-absolute  start-0 translate-middle">
                <span>
                  <img src={CheckMark} className="checkMark" alt="" />
                </span>
              </div>

              <div className="circle-blue rounded-circle text-center position-absolute  start-0 translate-middle">
                <span>
                  <img src={CheckMark} className="checkMark" alt="" />
                </span>
              </div>

              <div className="circle-blue rounded-circle text-center position-absolute  start-0 translate-middle">
                <span>
                  <img src={CheckMark} className="checkMark" alt="" />
                </span>
              </div>

              <div className="circle-blue rounded-circle text-center position-absolute  start-0 translate-middle">
                <span>
                  <img src={CheckMark} className="checkMark" alt="" />
                </span>
              </div>

              <div className="circle-blue rounded-circle text-center position-absolute start-0 translate-middle">
                <span>
                  <img src={CheckMark} className="checkMark" alt="" />
                </span>
              </div>

              <div className="circle-blue rounded-circle text-center position-absolute top-100 start-0 translate-middle">
                <span>
                  <img src={CheckMark} className="checkMark" alt="" />
                </span>
              </div>
            </div>

            <div></div>
            <div>
              <h4 className="p-32">
                
                <div className="circle-blue rounded-circle text-center">
                  <span>
                    <img src={CheckMark} className="checkMark" alt="" />
                  </span>
                </div>
                Track Record Of Deliveries
              </h4>
              <h4 className="p-32">How Many Assigned Orders</h4>
              <h4 className="p-32">How Many Are Delivered</h4>
              <h4 className="p-32">How Many Are Remaining</h4>
              <h4 className="p-32">Daily Status Of Orders</h4>
              <h4 className="p-32">Electronic Signatures</h4>
              <p className="fw-bold">Download our app</p>
              <img src={GooglePlay} alt="" />
            </div>
          </div>
        </div> */}

        <img src={StarIcon} alt="" className="StarIcon" />
      </div>
    </section>
  );
};

export default AppForDriver;
