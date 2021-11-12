import React, { Component } from "react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import '../../../Styles/Common/phoneInput.scss';

const PhoneInput = () => {

  return (
    <React.Fragment>
      <ReactPhoneInput
        country={"pk"}
        inputClass={"form-input"}
      />
    </React.Fragment>
  );
};

export default PhoneInput;
