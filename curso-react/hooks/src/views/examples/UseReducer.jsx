import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState } from '../../store'
import { reducer } from '../../store/reducers'
import { numberAdd2 } from '../../store/actions/number'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Não logado</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'LOGIN', payload: 'Maria'})}>Login</button>
                    <button className="btn" onClick={() => dispatch({type: 'PARSER'})}>Parser</button>
                    <button className="btn" onClick={() => dispatch({type: 'ADDX', payload: 1})}>Add X</button>
                    <button className="btn" onClick={() => dispatch({type: 'MULTIPLY'})}>x7</button>
                    <button className="btn" onClick={() => dispatch({type: 'DIVIDE'})}>/25</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
