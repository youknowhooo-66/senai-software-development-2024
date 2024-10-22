import React from 'react';

const MostrarSoma = ({ num1, num2 }) => {
  const soma = num1 + num2;
  return (
    <div>
      A soma de {num1} + {num2} é: {soma}
    </div>
  );
};

export default MostrarSoma;
