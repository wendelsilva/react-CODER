import React from "react";
import './Card.css'

export function Card(props) {
    return (
        <div className="Card">
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    )
}