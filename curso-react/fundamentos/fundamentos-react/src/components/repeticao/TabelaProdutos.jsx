import React from "react";
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export function TabelaProdutos() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map((produto, i) => {
                    return (
                        <tr className={i % 2 === 0 ? 'par' : ''} key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>R$ {produto.preco}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}