interface BotaoProps {
    cor?: 'rose' | 'blue' | 'gray' | 'purple' | 'green'
    children: any;
    className?: string;
    onClick?: () => void;
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray';
    return (
        <button onClick={props.onClick} className={`bg-${cor}-500 text-white px-4 py-2 rounded-md ${props.className}`}>
            {props.children}
        </button>
    )
}