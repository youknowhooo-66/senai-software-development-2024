import Principal from "../../../../avaliacao-frontend-react/src/comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../../../../aulas-frontend-pwa/src/comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import { Link } from "react-router-dom";
import ServicosProdutos from "../../../../avaliacao-frontend-react/src/comum/servicos/ServicoProdutos";

const servicosProdutos = new ServicosProdutos();

const PaginaListaProdutos = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddOrUpdateProduto = () => {
    if (editingIndex === null) {
      servicosProdutos.adicionarProduto(nome, preco, produtos, setProdutos);
    } else {
      servicosProdutos.atualizarProduto(nome, preco, produtos, setProdutos, editingIndex, setEditingIndex);
    }
    setNome("");
    setPreco("");
  };

  return (
    <Principal titulo={`Lista de Produtos (${produtos.length})`} voltarPara="/">
      <div className="inputs">
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Preço do produto"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <BotaoCustomizado aoClicar={handleAddOrUpdateProduto}>
          {editingIndex === null ? "Adicionar" : "Atualizar"}
        </BotaoCustomizado>
      </div>
      <div>
        {produtos.length === 0 ? (
          <p>Não há produtos para listar.</p>
        ) : (
          <ul>
            {produtos.map((produto, index) => (
              <li key={index}>
                <p>Nome: {produto.nome}</p>
                <p>Preço: {produto.preco}</p>
                <button style={{ color: "blue" }} onClick={() => servicosProdutos.editarProduto(index, produtos, setNome, setPreco, setEditingIndex)}>
                  Editar
                </button>
                <button style={{ color: "red" }} onClick={() => servicosProdutos.removerProduto(index, produtos, setProdutos)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link to="/">Voltar para a Página Inicial</Link>
    </Principal>
  );
};

export default PaginaListaProdutos;
