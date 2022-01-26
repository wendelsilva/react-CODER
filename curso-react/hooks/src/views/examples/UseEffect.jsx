import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {

    function calculateFatorial(number) {
        const n = parseInt(number)
        if(n < 0) return -1
        if(n === 0) return 1
        return calculateFatorial(n - 1) * n
    }

    function oddOrEven(number) {
        return number % 2 === 0 ? 'Par' : 'Ímpar'
    }
    
    const [number, setNumber] = useState(1)
    const [number2, setNumber2] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [status, setStatus] = useState('')

    useEffect(() => {
        setFatorial(calculateFatorial(number))
    }, [number])

    useEffect(() => {
        setStatus(oddOrEven(number2))
    }, [number2])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
                <input type="number" className="input" value={number2} onChange={e => setNumber2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseEffect
