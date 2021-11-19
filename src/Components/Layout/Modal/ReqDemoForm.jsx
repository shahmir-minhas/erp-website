import React, { Component, useState } from "react";
import { Modal, Select, Input, Form } from "antd";
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
        <Form
        // name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        // initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
        layout= "horizontal"
        >
          <div className="row">
            <div className="col">
              <div className="mb-3 ">
                <label for="userName" className="form-label">
                  Full Name
                </label>
                <Form.Item
                  name="userName"
                  rules={[
                    { required: true, message: "Please input your Full Name!" },
                  ]}
                >
                  <Input placeholder="Shahmir Minhas" />
                </Form.Item>
              </div>
              <div className="mb-3">
                <label for="mobileNumber" className="form-label">
                  Mobile Number
                </label>
                <Form.Item
                  name="mobileNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please provide your Mobile Number!",
                    },
                  ]}
                >
                  <PhoneInput
                    value=""
                    inputProps={{
                      required: true,
                    }}
                  />
                </Form.Item>
              </div>

              <div className="mb-3">
                <label for="company" className="form-label">
                  Company
                </label>
                <Form.Item
                  name="company"
                  rules={[
                    {
                      required: true,
                      message: "Please provide your Company Name!",
                    },
                  ]}
                >
                  <Input placeholder="Company" />
                </Form.Item>
              </div>
            </div>

            <div className="col">
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please provide Email!",
                      type: "email",
                    },
                  ]}
                >
                  <Input placeholder="example@gmial.com" />
                </Form.Item>
              </div>
              <div className="mb-3">
                <label for="country" className="form-label">
                  Country
                </label>
                <Form.Item
                  name="select"
                  rules={[
                    {
                      required: true,
                      message: "Please select Country!",
                      // type: "select",
                    },
                  ]}
                >
                  <Select
                    className="form-control"
                    showSearch
                    placeholder="Select Country"
                    optionFilterProp="children"
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
                </Form.Item>
              </div>
              <div className="mb-3">
                <label for="numOfUsers" className="form-label">
                  Number of Users
                </label>
                <Form.Item
                  name="numberOfUsers"
                  rules={[
                    {
                      required: true,
                      message: "Please enter in the range of 0 - 10 ",
                      // type: "number",
                    },
                  ]}
                >
                  <Input placeholder="" />
                </Form.Item>
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
        </Form>
      </Modal>
    </React.Fragment>
  );
};

export default ReqDemoForm;
