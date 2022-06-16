import { useState } from 'react';
import Layout from '../components/Layout';

export default function Integracao() {
    const [cliente, setCliente] = useState({});
    const [codigo, setCodigo] = useState(1);

    function obterCliente() {
        fetch(`http://localhost:3000/api/clientes/${codigo}`)
        .then(response => response.json())
        .then(data => setCliente(data))
    }

    return (
        <Layout>
            <div>
                <input 
                    type="number" 
                    value={codigo} 
                    onChange={e => setCodigo(e.target.value)} 
                />
                <button 
                    onClick={obterCliente}
                >
                    Obter cliente
                </button>
            </div>
            <div>
                <ul>
                    <li>codigo: {cliente.id}</li>
                    <li>nome: {cliente.name}</li>
                </ul>
            </div>
        </Layout> 
    )
}