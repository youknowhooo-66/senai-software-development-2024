import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../../../../aulas-frontend-pwa/src/comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import { Link } from "react-router-dom";
import ServicoProjetos from "../../comum/servicos/ServicoProjetos";

const servicoProjetos = new ServicoProjetos();

const PaginaListaProjetos = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [projetos, setProjetos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleAddOrUpdateProjeto = () => {
    if (editingId === null) {
      servicoProjetos.adicionarProjeto(nome, descricao, projetos, setProjetos);
    } else {
      servicoProjetos.atualizarProjeto(editingId, nome, descricao, projetos, setProjetos, setEditingId);
    }
    setNome("");
    setDescricao("");
  };

  return (
    <Principal titulo={`Lista de Projetos (${projetos.length})`} voltarPara="/">
      <div className="inputs">
        <input
          type="text"
          placeholder="Nome do projeto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição do projeto"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <BotaoCustomizado aoClicar={handleAddOrUpdateProjeto}>
          {editingId === null ? "Adicionar" : "Atualizar"}
        </BotaoCustomizado>
      </div>
      <div>
        {projetos.length === 0 ? (
          <p>Não há projetos para listar.</p>
        ) : (
          <ul>
            {projetos.map((projeto) => (
              <li key={projeto.id}>
                <p>Nome: {projeto.nome}</p>
                <p>Descrição: {projeto.descricao}</p>
                <Link to={`/projeto/${projeto.id}`}>Detalhes</Link>
                <button style={{ color: "blue" }} onClick={() => servicoProjetos.editarProjeto(projeto.id, projetos, setNome, setDescricao, setEditingId)}>
                  Editar
                </button>
                <button style={{ color: "red" }} onClick={() => servicoProjetos.removerProjeto(projeto.id, projetos, setProjetos)}>
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

export default PaginaListaProjetos;
