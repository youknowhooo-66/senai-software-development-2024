import Principal from "../../../../avaliacao-frontend-react/src/comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../../../../aulas-frontend-pwa/src/comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";


const formatarPreco = (preco) => {
    return preco
      .replace(/\D/g, "") // Remove caracteres não numéricos
      .replace(/(\d)(\d{2})$/, "$1,$2") // Adiciona a vírgula antes dos últimos dois dígitos
      .replace(/(?=(\d{3})+(\D))\B/g, "."); // Adiciona pontos a cada grupo de três dígitos
  };
  

const PaginaListaProdutos = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);


  const adicionarProduto = () => {
    if (!nome || !preco) {
      alert("Preencha o Nome e Preço do produto");
      return;
    }

    const novoProduto = { nome, preco: formatarPreco(preco) };
    setProdutos([...produtos, novoProduto]);
    setNome("");
    setPreco("");
  };

  const removerProduto = (index) => {
    if (window.confirm("Tem certeza que deseja remover o produto?")) {
      setProdutos(produtos.filter((_, i) => i !== index));
    }
  };

  const editarProduto = (index) => {
    setNome(produtos[index].nome);
    setPreco(produtos[index].preco);
    setEdicaoIndex(index);
  };

  const atualizarProduto = () => {
    if (!nome || !preco) {
      alert("Preencha o Nome e Preço do produto");
      return;
    }

    const produtosEditados = produtos.map((produto, index) =>
      index === editingIndex ? { nome, preco: formatarPreco(preco) } : produto
    );
    setProdutos(produtosEditados);
    setNome("");
    setPreco("");
    setEdicaoIndex(null);
  };

  const AtualizarProduto = () => {
    if (editingIndex === null) {
      adicionarProduto();
    } else {
      atualizarProduto();
    }
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
        <BotaoCustomizado aoClicar={AtualizarProduto}>
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
                <button style={{ color: "blue" }} onClick={() => editarProduto(index)}>
                  Editar
                </button>
                <button style={{ color: "red" }} onClick={() => removerProduto(index)}>
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

export default PaginaListaProdutos;
