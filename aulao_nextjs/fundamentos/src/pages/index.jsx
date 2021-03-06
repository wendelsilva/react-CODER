import Navegador from '../components/Navegador';

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap',
        }}>
            <Navegador destino="/estiloso" texto="Estiloso"/>
            <Navegador destino="/exemplo" texto="Exemplo" cor="#9400d3"/>
            <Navegador destino="/jsx" texto="Jsx" cor="crimson"/>
            <Navegador destino="/navegacao" texto="Navegação #01" cor="green"/>
            <Navegador destino="/cliente/123" texto="Navegação #02" cor="blue"/>
            <Navegador destino="/estado" texto="Componente com Estado" cor="#754582"/>
            <Navegador destino="/integracao_1" texto="Integração com API #01" cor="#00F7FF"/>
            <Navegador destino="/estatico" texto="Conteúdo estático" cor="#E03F47"/>
        </div>
    )
}