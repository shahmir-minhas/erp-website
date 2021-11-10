import React, { Component } from 'react';
import '../../../Styles/Common/button.scss';


//input childern, classes
const Button = (props) => {

    return ( <button className={props.className} type={props.type} >
        {props.children}
    </button> );
}
 
export default Button;