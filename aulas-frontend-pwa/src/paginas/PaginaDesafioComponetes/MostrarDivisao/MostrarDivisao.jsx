import React from 'react';

const MostrarDivisao = ({ num1, num2 }) => {
  const divisao = num1 / num2;
  return (
    <div>
      A divisão de {num1} / {num2} é: {divisao}
    </div>
  );
};

export default MostrarDivisao;
