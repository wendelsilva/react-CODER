import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../hooks/useCounter'
import SectionTitle from '../../components/layout/SectionTitle'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {

const [ count, increment, decrement, reset ] = useCounter()
const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=1'
const response = useFetch(url)

function showStates(states) {
    console.log(states);
    return states.results.map(state => <li key={state.name}>{state.name} - {state.url}</li>)
}

return (
<div className="UseCustom">
    <PageTitle title="Seu Hook" subtitle="Vamos aprender como criar o nosso próprio Hook!" />
    <SectionTitle title="Exercício #01" />
    <div className="center">
        <span className="text">{count}</span>
        <div>
            <button className="btn" onClick={()=> increment()}>+1</button>
            <button className="btn" onClick={()=> decrement()}>-1</button>
            <button className="btn" onClick={()=> reset()}>reset</button>
        </div>
    </div>
    <SectionTitle title="Exercício #02" />
    <div className="center">
        <ul>
            {response ? showStates(response) : 'Carregando...'}
        </ul>
    </div>
</div>
)
}

export default UseRef