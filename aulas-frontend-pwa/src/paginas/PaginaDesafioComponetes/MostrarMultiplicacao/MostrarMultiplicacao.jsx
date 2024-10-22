import React from 'react';

const MostrarMultiplicacao = ({ num1, num2 }) => {
  const multiplicacao = num1 * num2;
  return (
    <div>
      A multiplicação de {num1} * {num2} é: {multiplicacao}
    </div>
  );
};

export default MostrarMultiplicacao;
