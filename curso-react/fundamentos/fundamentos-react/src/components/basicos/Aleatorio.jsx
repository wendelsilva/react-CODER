import React from "react";

export function Aleatorio(props) {
    const aleatorio = Math.floor(Math.random() * (props.max - props.min)) + props.min;
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>Valor: {aleatorio}</p>
        </div>
    )
}