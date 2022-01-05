import React from "react";

import alunos from "../../data/alunos"

export function ListaAlunos() {
    const alunosJSX = alunos.map(aluno => {
        return <li key={aluno.id}>{aluno.id}) {aluno.nome} - {aluno.nota}</li>
    })

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {alunosJSX}
      </ul>
    </div>
  );
}