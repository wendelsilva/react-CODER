import React from "react";

export function IndiretaFilho(props) {

    const max = 100
    const min = 0
    const gerarIdade = () => parseInt(Math.random() * (max - min) + min);

    return (
        <div>
           <div>Filho</div>
           <button onClick={props.quandoClicar('João', gerarIdade(), true)}>Fornecer Informações</button>
        </div>
    )
}