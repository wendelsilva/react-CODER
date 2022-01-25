import React from "react";

import { useParams } from "react-router-dom";

export function Param() {

    const {id} = useParams();

  return (
    <div className="param">
      <h1>Param</h1>
      <h2>valor {id}</h2>
    </div>
  );
}