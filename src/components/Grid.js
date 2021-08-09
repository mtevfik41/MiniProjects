import React from "react";

import Box from "./Box";
import './style.css';

const Grid = props => {
    return (
        <div className="grid">
            {props.items.map(data => <Box title={data.title} href={data.href}/>)}
        </div>
    )
}

export default Grid;