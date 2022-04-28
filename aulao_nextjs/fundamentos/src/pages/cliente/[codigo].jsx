import Layout from "../../components/Layout"
import { useRouter } from "next/router"

export default function ClienteProCodigo() {
    const router = useRouter()
    
    return (
        <Layout titulo="Nevagação Dinâmica #01">
            <span>Código = {router.query.codigo}</span>
            <h1>Navegação Dinâmica #01</h1>
        </Layout>
    )
}