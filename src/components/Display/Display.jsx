import React from 'react';
import "./Display.css";

const Display = props => (
    <div className="display-main">
        {props.currentValue}
    </div>
)

export default Display;