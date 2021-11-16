import React, { Component } from "react";
import { Input, Select } from "antd";

const StepTwo = () => {
  const { Option } = Select;

  const businessType = [
    "Whole Sale",
    "Self",
    "White Label",
    "Affiliate",
  ];
  return (
    <React.Fragment>
      <div className="d-flex step-two">
        <div className="me-3 w-100">
          <div className="mb-4 ">
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <Input />
            <div className="invalid-feedback">Please enter Company</div>
          </div>
          <div className="mb-4">
            <label htmlFor="numOfUsers" className="form-label">
              Number of Users
            </label>
            <Input />
            <div className="invalid-feedback">
              Please enter Number of Users.
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="crNumber" className="form-label">
              CR Number
            </label>
            <Input />
            <div className="invalid-feedback">Please enter CR Number.</div>
          </div>

          <div className="mb-4">
            <label htmlFor="numOfUsers" className="form-label">
              Number Of Suppliers
            </label>
            <Input />
            <div className="invalid-feedback">Please enter No of Supplies.</div>
          </div>
          {/* flex 1 ends here */}
        </div>

        <div className="w-100">
          <div className="mb-4 ">
            <label htmlFor="noOfBrances" className="form-label">
              Number of Branches
            </label>
            <Input />
            <div className="invalid-feedback">
              Please enter Number of Branches.
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="form-label">
              Position
            </label>
            <Input />
            <div className="invalid-feedback">Please enter a Position.</div>
          </div>
          <div className="mb-4">
            <label htmlFor="numOfCustomers" className="form-label">
              Number of Customers
            </label>
            <Input />
            <div className="invalid-feedback">
              Please enter Number of Customers.
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="form-label">
              Business Type
            </label>
            <div>
              <Select
                className="form-control"
                showSearch
                placeholder=""
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                // showArrow={false}
              >
                {businessType.map((list) => (
                  <Option value={list}>{list}</Option>
                ))}
              </Select>
            </div>

            <div className="invalid-feedback">Please Select Business Type.</div>
          </div>

          {/* flex 2 ends here */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepTwo;
