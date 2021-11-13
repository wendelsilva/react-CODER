import React from "react"

export default function ComParametro(props) {
    const sub = props.subtitulo
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>{sub}</p>
            <p>números no react {props.nota}</p>
        </div>
    )
}