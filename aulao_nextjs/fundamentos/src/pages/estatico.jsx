import Layout from "../components/Layout";

export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Contaúdo Estático">
            <div>
                {props.numero}
            </div>
       </Layout>
    )
}