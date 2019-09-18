import React from "react";
import "./OperandKeypad.css";

const OperandKeypad = props => (
    <button className={props.btnStyle}>
        {props.children}
    </button>
)

export default OperandKeypad;