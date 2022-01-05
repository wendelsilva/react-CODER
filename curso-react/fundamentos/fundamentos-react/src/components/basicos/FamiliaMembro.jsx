import React from "react";

export function FamiliaMembro(props) {
    return (
        <div>{props.name} <strong>{props.surname}</strong></div>
    )
}