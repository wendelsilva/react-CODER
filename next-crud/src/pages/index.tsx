import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('1','João', 34),
    new Cliente('2','Pedro', 14),
    new Cliente('3','Maria', 24),
    new Cliente('4','Wendel', 20),
  ]

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
