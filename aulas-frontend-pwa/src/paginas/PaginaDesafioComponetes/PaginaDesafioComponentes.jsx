import React from 'react';
import MostrarDivisao from './MostrarDivisao/MostrarDivisao';
import MostrarMeuNomeCompleto from './MostrarMeuNomeCompleto/MostrarMeuNomeCompleto';
import MostrarMultiplicacao from './MostrarMultiplicacao/MostrarMultiplicacao';
import MostrarNumerosPares from './MostrarNumerosPares/MostrarNumerosPares';
import MostrarProduto from './MostrarProduto/MostrarProduto';
import MostrarSoma from './MostrarSoma/MostrarSoma';
import MostrarSubtracao from './MostrarSubtracao/MostrarSubtracao';
import Principal from '../../comum/componentes/Principal/Principal';

const numeros = [1, 8, 13, 16, 21, 24, 29, 32, 37, 40, 45, 48];
const produto = {
  nome: 'TV Samsung 55"',
  preco: 2999.90,
  estoque: 345,
};

const PaginaDesafioComponentes = () => {
  return (
    <div>

    <Principal>
      <MostrarSoma num1={11} num2={12} />
      <MostrarSubtracao num1={10} num2={2} />
      <MostrarDivisao num1={50} num2={10} />
      <MostrarMultiplicacao num1={10} num2={10} />
      <MostrarMeuNomeCompleto nome="Maycon" sobrenome="Gibson Neves dos Santos" />
      <MostrarProduto produto={produto} />
      <MostrarNumerosPares numeros={numeros} />
    </Principal>

    </div>
  );
};

export default PaginaDesafioComponentes;
