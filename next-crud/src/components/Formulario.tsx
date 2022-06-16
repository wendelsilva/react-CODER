import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente;
    cancelado?: () => void;
    clienteMudou?: (cliente: Cliente) => void;
}

export default function Formulario(props: FormularioProps) {
        
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

    return (
        <div>
            {id ? (
                <Entrada texto="ID" valor={id} somenteLeitura className="mb-4"/>
            ) : null}
            <Entrada 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome} 
                className="mb-4"
            />
            <Entrada 
                texto="Idade" 
                valor={idade}
                valorMudou={setIdade} 
                className="mb-4"
            />
            <div className="mt-7 flex justify-end">
                <Botao 
                    className="mr-2" 
                    cor="green"
                    onClick={() => props.clienteMudou?.(new Cliente(id, nome, idade))}
                >
                    {id ? 'Atualizar' : 'Cadastrar'}
                </Botao>
                <Botao 
                    cor="rose" 
                    onClick={props.cancelado}
                >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}