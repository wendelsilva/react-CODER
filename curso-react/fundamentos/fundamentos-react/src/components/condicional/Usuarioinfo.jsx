import React from "react";
import { If }  from "./If";

export function UsuarioInfo(props) {
    const usuario = props.usuario || {};
    return (
        <div>
            {/* <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{props.usuario.nome}</strong>
            </If> */}
            {/* <If test={!usuario && !usuario.nome}>
                Seja bem vindo
            </If> */}
        </div>
    )
}