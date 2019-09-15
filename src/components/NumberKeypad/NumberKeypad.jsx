import React from 'react';
import "./NumberKeypad.css";

const NumberKeypad = props => (
    <button 
        className="keypad-number-btn"
        onClick={() => props.handleDisplayInput(props.value)}
    >
        {props.children}
    </button>
)

export default NumberKeypad;