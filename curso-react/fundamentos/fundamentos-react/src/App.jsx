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
import { ListaAlunos } from "./components/repeticao/ListaAlunos";
import { TabelaProdutos } from "./components/repeticao/TabelaProdutos";
import { ParouImpar } from "./components/condicional/ParouImpar";
import { UsuarioInfo } from "./components/condicional/Usuarioinfo";
import { DiretaPai } from "./components/comunicacao/DiretaPai";
import { IndiretaPai } from "./components/comunicacao/IndiretaPai";
import { Input } from "./components/formulario/Input";
import { Contador } from "./components/contador/Contador";


export function App(props) {
return (
<div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">

    <Card titulo="#12 Contador" color="#D35400">
            <Contador numeroInicial={100} passo={2}/>
        </Card>

        <Card titulo="#11 Componente Controlado" color="#34495E">
            <Input />
        </Card>

        <Card titulo="#10 Comunicação Indireta" color="#148F77">
            <IndiretaPai />
        </Card>

        <Card titulo="#09 Comunicação Direta" color="#148F77">
            <DiretaPai />
        </Card>

        <Card titulo="#08 Rederização Condicional" color="#B03A2E">
            <ParouImpar numero={2}/>
            <UsuarioInfo usuario={{nome: "wendel"}}/>
        </Card>

        <Card titulo="#07 Desafio Repetição" color="#6C3483">
            <TabelaProdutos />
        </Card>

        <Card titulo="#06 Repetição" color="#2E4053">
            <ListaAlunos />
        </Card>

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