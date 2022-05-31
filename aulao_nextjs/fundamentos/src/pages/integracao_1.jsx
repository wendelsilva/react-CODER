export default function Integracao() {
    fetch('http://localhost:3000/api/clientes/123')
        .then(response => response.json())
        .then(data => console.log(data))


    return (
        <div>
            <ul>
                <li>codigo:</li>
                <li>nome:</li>
            </ul>
        </div>
    )
}