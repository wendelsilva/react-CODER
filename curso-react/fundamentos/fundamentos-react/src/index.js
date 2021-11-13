import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const el = document.getElementById('root')

ReactDOM.render(
    <div>
        <Primeiro />
        <ComParametro 
        titulo="segundo componente"
        subtitulo="curso de react + redux da COD3R"
        nota={9.3} 
        />
    </div>,
    el
)