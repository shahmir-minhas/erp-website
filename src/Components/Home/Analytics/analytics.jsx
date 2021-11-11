import React, { Component } from "react";
import "../../../Styles/analytics.scss";
import Button from "./../../Common/Button/button";
import { Tabs } from "antd";
import Dashboard from "../../../Assets/Dashboard Design.png";

const { TabPane } = Tabs;

const Analytics = () => {
  const tabData = [
    {
      key: 1,
      tabTitle: "KPI Dashboard",
      body: Dashboard,
    },
    {
        key: 2,
        tabTitle: "KPI Dashboard",
        body: Dashboard,
      },
      {
        key: 3,
        tabTitle: "KPI Dashboard",
        body: '',
      },
  ];

  return (
    <React.Fragment>
      <section className="analytics">
        <h1>Complete, Versatile & Powerful Dashboards & Analytics</h1>
        <p>These Dashboard are Designed for both, simplicity and power.</p>
        <div className="tabs">
          <Tabs defaultActiveKey="1" type="card">
            {tabData.map((tab)=>
                <TabPane tab={tab.tabTitle} key={tab.key}>
              <div className="tab-body">
                <img src={tab.body} className="tab-img" alt="" />
              </div>
            </TabPane>
            )}
          </Tabs>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Analytics;
