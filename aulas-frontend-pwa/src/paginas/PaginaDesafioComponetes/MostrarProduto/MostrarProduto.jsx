import React from 'react';

const MostrarProduto = ({ produto }) => {
  return (
    <div>
      <h2>Produto: {produto.nome}</h2>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
      <p>Estoque: {produto.estoque} unidades</p>
    </div>
  );
};

export default MostrarProduto;
