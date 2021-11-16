import React, { Component } from "react";
import { Select, Input } from "antd";

const StepThree = () => {
  const { Option } = Select;
  const country = [
    "Pakitsan",
    "USA",
    "India",
    "UAE",
    "Iran",
    "Nepal",
    "Saudia",
    "Amrica",
    "Canada",
    "Afghannistan",
  ];

  return (
    <React.Fragment>
      <div className="d-flex step-three">
        <div className="me-3 w-100">
          <div className="mb-4">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <Select
              className="form-control"
              showSearch
              placeholder=""
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              // showArrow={false}
            >
              {country.map((list) => (
                <Option value={list}>{list}</Option>
              ))}
            </Select>
            <div className="invalid-feedback">Please Select a Country.</div>
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <Input />
            <div className="invalid-feedback">Please enter City</div>
          </div>
          <div className="mb-5">
            <label htmlFor="postalCode" className="form-label">
              Postal/Zip Code
            </label>
            <Input />
            <div className="invalid-feedback">
              Please provide Postal or Zip Code.
            </div>
          </div>
          {/* flex 1 ends here */}
        </div>

        <div className="w-100">
          <div className="mb-4">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <Input />
            <div className="invalid-feedback">
              Please provide Valid Address.
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <Input />
            <div className="invalid-feedback">Please enter a Position.</div>
          </div>
          {/* flex 2 ends here */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepThree;
