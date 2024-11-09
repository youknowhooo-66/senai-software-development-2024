import React, { useState } from "react";
import { Link } from "react-router-dom";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../../../../aulas-frontend-pwa/src/comum/componentes/BotaoCustomizado/BotaoCustomizado";
import ServicoUsuarios from "../../comum/servicos/ServicoUsuarios";

const servicoUsuario = new ServicoUsuarios();

const PaginaListaUsuarios = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddOrUpdateUsuario = () => {
    if (editingIndex === null) {
      servicoUsuario.adicionarUsuario(nome, email, usuarios, setUsuarios);
    } else {
      servicoUsuario.atualizarUsuario(nome, email, usuarios, setUsuarios, editingIndex, setEditingIndex);
    }
    setNome("");
    setEmail("");
  };

  return (
    <Principal titulo={`Lista de Usuários (${usuarios.length})`} voltarPara="/">
      <div className="inputs">
        <input
          type="text"
          placeholder="Nome do usuário"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email do usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <BotaoCustomizado aoClicar={handleAddOrUpdateUsuario}>
          {editingIndex === null ? "Adicionar" : "Atualizar"}
        </BotaoCustomizado>
      </div>
      <div>
        {usuarios.length === 0 ? (
          <p>Não há usuários para listar.</p>
        ) : (
          <ul>
            {usuarios.map((usuario, index) => (
              <li key={index}>
                <p>Nome: {usuario.nome}</p>
                <p>Email: {usuario.email}</p>
                <button style={{ color: "blue" }} onClick={() => servicoUsuario.editarUsuario(index, usuarios, setNome, setEmail, setEditingIndex)}>
                  Editar
                </button>
                <button style={{ color: "red" }} onClick={() => servicoUsuario.removerUsuario(index, usuarios, setUsuarios)}>
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

export default PaginaListaUsuarios;
