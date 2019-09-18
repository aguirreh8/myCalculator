import React from "react";

const OperandKeypad = props => (
    <button className={props.btnStyle}>
        {props.children}
    </button>
)

export default OperandKeypad;