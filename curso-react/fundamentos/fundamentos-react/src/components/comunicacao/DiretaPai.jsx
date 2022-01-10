import React from "react";

import { DiretaFilho } from "./DiretaFilho";

export function DiretaPai(props) {
    return (
        <div>
            <DiretaFilho texto="Texto do filho" numero={10} bool={true} />
        </div>
    )
}