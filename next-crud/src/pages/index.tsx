import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import { useState } from "react";

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());

  const clientes = [
    new Cliente('1','João', 34),
    new Cliente('2','Pedro', 14),
    new Cliente('3','Maria', 24),
    new Cliente('4','Wendel', 20),
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel('form');
  }

  function clienteExcluido(cliente: Cliente) {
  }

  function salvarCliente(cliente: Cliente) {
    setVisivel('tabela')
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel('form');
  }

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao 
                className="mb-4" cor="purple"
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} 
            />
          </>
        ): (
          <Formulario 
            cliente={cliente}
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  )
}
