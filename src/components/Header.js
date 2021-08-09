import React from "react";

import './style.css';

const Header = props => {
    return (<span className="header">{props.title}</span>)
}

export default Header;