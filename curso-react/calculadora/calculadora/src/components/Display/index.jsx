import React from "react";

import './styles.css';

export function Display(props) {
    return (
        <div className="display">
            {props.value}
        </div>
    )
}