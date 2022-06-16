interface EntradaProps {
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4">
                {props.texto}
            </label>
            <input className={`border border-purple-500 rounded-md focus:outline-none bg-purple-50 px-4 py-2 ${props.somenteLeitura ? '' : 'focus:bg-purple-100'}`}
            type={props.tipo ?? 'text'} 
            value={props.valor} 
            readOnly={props.somenteLeitura}
            onChange={(e) => props.valorMudou?.(e.target.value)}
            />
        </div>
    )
}