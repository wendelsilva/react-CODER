import React from 'react';
import { connect } from 'react-redux';

import { Card } from './Card';

export function Sorteio(props) {
  const { min, max } = props.numeros;
  const aleatorio = parseInt(Math.random() * (max - min) + min);
  return (
    <Card title="Sorteio de Números" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    numeros: state.numeros
  }
}

export default connect(mapStateToProps)(Sorteio)