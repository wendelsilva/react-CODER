import React from "react";

import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import { Fragmento } from './components/basicos/Fragmento'
import { Aleatorio } from "./components/basicos/Aleatorio";
import { Card } from "./components/layout/Card";


export function App(props) {
    return (
        <div id="app">
            <h1>Fundamentos React (Arrow)</h1>
            <Card titulo="#04 Desafio Aleatório">
                <Aleatorio min={1} max={10} />
            </Card>

            <Card titulo="#03 Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#02 Com Parâmetro">
                <ComParametro 
                titulo="segundo componente"
                subtitulo="curso de react + redux da COD3R"
                nota={9.3} 
                />
            </Card>

            <Card titulo="#01 Primeiro Componente">
                <Primeiro />
            </Card>
            
            
            
            
        </div>
    );
}