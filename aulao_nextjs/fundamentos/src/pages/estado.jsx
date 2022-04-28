import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {
    const [state, setState] = useState(0)

    function incrementar() {
        setState(state + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{state}</div>
            <button onClick={incrementar}>incrementar</button>
        </Layout>
    )
}