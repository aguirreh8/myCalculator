import React from "react";
import './Main.css';

const Main = props => (
    <div className="main-wrapper">
        {props.children}
    </div> 
)

export default Main;