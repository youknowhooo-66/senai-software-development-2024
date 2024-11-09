import Principal from "../../comum/componentes/Principal/Principal";
import { useState } from "react";
import { Link } from "react-router-dom";
import ServicoVeiculo from "../../comum/servicos/ServicosEstoqueDeVeiculos";
import BotaoCustomizado from "../../comum//componentes/BotaoCustomizado/BotaoCustomizado";
import './PaginaEstoqueDeVeiculos.css'

const servicoVeiculo = new ServicoVeiculo();

const PaginaEstoqueVeiculos = () => {
  const [marcaNome, setMarcaNome] = useState("");
  const [ano, setAno] = useState("");
  const [preco, setPreco] = useState("");
  const [veiculos, setVeiculos] = useState([]);
  const [editarIndex, setEditarIndex] = useState(null);

  const veiculoAtualizado = () => {
    if (editarIndex === null) {
      servicoVeiculo.adicionarVeiculo(marcaNome, ano, preco, veiculos, setVeiculos);
    } else {
      servicoVeiculo.atualizarVeiculo(marcaNome, ano, preco, veiculos, setVeiculos, editarIndex, setEditarIndex);
    }
    setMarcaNome("");
    setAno("");
    setPreco("");
  };

  return (
    
    <Principal titulo={`Estoque de Veículos (${veiculos.length})`} voltarPara={'/'} >
      <div className="inputs">
        <input
          type="text"
          placeholder="Marca/Nome do veículo"
          value={marcaNome}
          onChange={(e) => setMarcaNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Ano do veículo"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço do veículo"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <BotaoCustomizado aoClicar={veiculoAtualizado}>
          {editarIndex === null ? "Adicionar" : "Atualizar"}
        </BotaoCustomizado>
 
      </div>
      <div className="itens">
        {veiculos.length === 0 ? (
          <p style={{ textAlign: "center" }}>Estoque vazio.</p>
        ) : (
          <ul>
            {veiculos.map((veiculo, index) => (
              <li key={index} style={{ textDecoration: veiculo.vendido ? "line-through" : "none" }}>
                <p>Marca/Nome: {veiculo.marcaNome}</p>
                <p>Ano: {veiculo.ano}</p>
                <p>Preço: {veiculo.preco}</p>
                <button style={{ color: "green" }} onClick={() => servicoVeiculo.marcarVendido(index, veiculos, setVeiculos)}>
                  {veiculo.vendido ? "Desmarcar Vendido" : "Marcar como Vendido"}
                </button>
                <button style={{ color: "blue" }} onClick={() => servicoVeiculo.editarVeiculo(index, veiculos, setMarcaNome, setAno, setPreco, setEditarIndex)}>
                  Editar
                </button>
                <button style={{ color: "red" }} onClick={() => servicoVeiculo.removerVeiculo(index, veiculos, setVeiculos)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
 
    </Principal>
  );
};

export default PaginaEstoqueVeiculos;
