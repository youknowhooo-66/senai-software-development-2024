import React, { useState } from "react";
import { Link } from "react-router-dom";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../../../../aulas-frontend-pwa/src/comum/componentes/BotaoCustomizado/BotaoCustomizado";
import ServicoTarefas from "../../comum/servicos/ServicoTarefas";

const servicoTarefa = new ServicoTarefas();

const PaginaListaTarefas = () => {
  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddOrUpdateTarefa = () => {
    if (editingIndex === null) {
      servicoTarefa.adicionarTarefa(descricao, tarefas, setTarefas);
    } else {
      servicoTarefa.atualizarTarefa(descricao, tarefas, setTarefas, editingIndex, setEditingIndex);
    }
    setDescricao("");
  };

  return (
    <Principal titulo={`Lista de Tarefas (${tarefas.length})`} voltarPara="/">
      <div className="inputs">
        <input
          type="text"
          placeholder="Descrição da tarefa"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <BotaoCustomizado aoClicar={handleAddOrUpdateTarefa}>
          {editingIndex === null ? "Adicionar" : "Atualizar"}
        </BotaoCustomizado>
      </div>
      <div>
        {tarefas.length === 0 ? (
          <p>Não há tarefas para listar.</p>
        ) : (
          <ul>
            {tarefas.map((tarefa, index) => (
              <li key={index}>
                <p>Descrição: {tarefa.descricao}</p>
                <button style={{ color: "blue" }} onClick={() => servicoTarefa.editarTarefa(index, tarefas, setDescricao, setEditingIndex)}>
                  Editar
                </button>
                <button style={{ color: "red" }} onClick={() => servicoTarefa.removerTarefa(index, tarefas, setTarefas)}>
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

export default PaginaListaTarefas;
