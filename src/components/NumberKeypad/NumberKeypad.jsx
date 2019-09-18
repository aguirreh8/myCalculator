import React from 'react';
import "./NumberKeypad.css";

const NumberKeypad = props => (
    <button 
        className={props.btnStyle}
        onClick={() => props.handleDisplayInput(props.value)}
    >
        {props.children}
    </button>
)

export default NumberKeypad;