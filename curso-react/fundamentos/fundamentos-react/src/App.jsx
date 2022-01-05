import React from "react";
import './App.css';

import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import { Fragmento } from './components/basicos/Fragmento'
import { Aleatorio } from "./components/basicos/Aleatorio";
import { Card } from "./components/layout/Card";
import { Familia } from "./components/basicos/Familia";
import { FamiliaMembro } from "./components/basicos/FamiliaMembro";


export function App(props) {
return (
<div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">

        <Card titulo="#05 Componente com Filhos" color="#3498DB">
            <Familia surname="Silva">
                <FamiliaMembro name="Pedro" />
                <FamiliaMembro name="Ana" />
                <FamiliaMembro name="João" />
            </Familia>
        </Card>

        <Card titulo="#04 Desafio Aleatório" color="#fa6900">
            <Aleatorio min={1} max={10} />
        </Card>

        <Card titulo="#03 Fragmento" color="#e9ac6f">
            <Fragmento />
        </Card>

        <Card titulo="#02 Com Parâmetro" color="#e8b71a">
            <ComParametro titulo="segundo componente" subtitulo="curso de react + redux da COD3R" nota={9.3} />
        </Card>

        <Card titulo="#01 Primeiro Componente" color="#588c73">
            <Primeiro />
        </Card>
    </div>
</div>
);
}