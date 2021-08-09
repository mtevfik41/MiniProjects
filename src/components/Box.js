import React from "react";

import Header from "./Header";
import SubText from "./SubText";
import './style.css'

const Box = props => {
    console.log(props.href)
    return (
        <a href={props.href} className="box" target="_blank" rel="noopener noreferrer">
            <Header title={props.title}/>
            <SubText/>
        </a>
    )
};

export default Box;
