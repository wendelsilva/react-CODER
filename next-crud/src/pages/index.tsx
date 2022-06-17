import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const {exibirTabela, tabelaVisivel, cliente, clientes, novoCliente, selecionarCliente, excluirCliente, salvarCliente} = useClientes()

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
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
              clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente} 
            />
          </>
        ): (
          <Formulario 
            cliente={cliente}
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  )
}
