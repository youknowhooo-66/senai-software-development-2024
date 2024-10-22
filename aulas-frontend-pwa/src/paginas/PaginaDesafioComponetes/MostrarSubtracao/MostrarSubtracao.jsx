import React from 'react';

const MostrarSubtracao = ({ num1, num2 }) => {
  const subtracao = num1 - num2;
  return (
    <div>
      A subtração de {num1} - {num2} é: {subtracao}
    </div>
  );
};

export default MostrarSubtracao;
