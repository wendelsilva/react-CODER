import React, { useState } from 'react';

import './Input.css'

export function Input() {

    const [valor, setValor] = useState('Inicial');

    function quandoMudar(event) {
        setValor(event.target.value);
    }

    return(
        <div className='input'>
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar}/>
        </div>
    )
}