import React, { Component, useState } from "react";
import { Modal, Select,Input  } from "antd";
import "../../../Styles/modalForm.scss";
import PhoneInput from "../../Common/PhoneNumber/phoneInput";

const ReqDemoForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <React.Fragment>
      <button type="primary" onClick={showModal}>
        Request Demo
      </button>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        okText="Submit"
        // width={582}
        footer={null}
        className="modal-design"
        onCancel={handleCancel}
      >
        <h5>Request Demo Form</h5>
        <p>For the prism demo fill the details below to get your demo.</p>

        <form action="" className="needs-validation">
          <div className="row">
            <div className="col">
              <div className="mb-3 ">
                <label for="userName" className="form-label">
                  Full Name
                </label>
                <Input placeholder="Shahmir Minhas" />
                {/* <input
                  type="text"
                  className="form-control"
                  id="userName"
                  placeholder="Shahmir Minhas"
                /> */}
                <div className="invalid-feedback">
                  Please enter a correct User Name.
                </div>
              </div>
              <div className="mb-3">
                <label for="mobileNumber" className="form-label">
                  Mobile Number
                </label>
                <PhoneInput/>
                <div className="invalid-feedback">
                  Please enter a correct Mobile Number.
                </div>
              </div>
              <div className="mb-3">
                <label for="company" className="form-label">
                  Company
                </label>
                <Input placeholder="Company" />
                {/* <input type="text" className="form-control" id="company" /> */}
                <div className="invalid-feedback">Please enter Compnay Name.</div>
              </div>
            </div>

            <div className="col">
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <Input placeholder="example@gmial.com" />
                {/* <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                /> */}
                <div className="invalid-feedback">
                  Please enter a correct Email.
                </div>
              </div>
              <div className="mb-3">
                <label for="country" className="form-label">
                  Country
                </label>
                <div>
                  <Select
                    className="form-control"
                    showSearch
                    placeholder="Select Country"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {country.map((list) => (
                      <Option value={list}>{list}</Option>
                    ))}
                  </Select>
                </div>

                <div className="invalid-feedback">Please Select a Country.</div>
              </div>
              <div className="mb-3">
                <label for="numOfUsers" className="form-label">
                  Number of Users
                </label>
                <Input placeholder="" />
                {/* <input type="number" className="form-control" id="numOfUsers" /> */}
                <div class="invalid-feedback">
                  Please enter a Number of Users.
                </div>
              </div>
              <div className="mb-3 text-end ">
                <input
                  type="reset"
                  value="Reset Form"
                  className="form-control text-danger border-0 p-0 ms-auto"
                />
              </div>
            </div>
          </div>
          <input type="submit" value="Submit" className="modal-btn-submit" />
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default ReqDemoForm;
