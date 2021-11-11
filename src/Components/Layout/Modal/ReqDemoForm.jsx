import React, { Component ,useState } from "react";
import { Modal, Button } from 'antd';

const ReqDemoForm = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

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
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Request Demo Form"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </React.Fragment>
  );
};

export default ReqDemoForm;
