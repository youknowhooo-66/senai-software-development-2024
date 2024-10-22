import React from 'react';

const MostrarNumerosPares = ({ numeros }) => {
  const numerosPares = numeros.filter(num => num % 2 === 0);
  return (
    <ul>
      {numerosPares.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
};

export default MostrarNumerosPares;
