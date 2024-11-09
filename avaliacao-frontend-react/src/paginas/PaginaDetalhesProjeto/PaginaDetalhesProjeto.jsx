import React, { useState, useEffect } from "react";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../../../../aulas-frontend-pwa/src/comum/componentes/BotaoCustomizado/BotaoCustomizado";
// import { useParams, useHistory } from "react-router-dom";
import ServicoProjetos from "../../../../avaliacao-frontend-react/src/comum/servicos/ServicoProjetos";

const servicoProjetos = new ServicoProjetos();

const PaginaDetalhesProjeto = ({ projetos, setProjetos }) => {
  const { id } = useParams();
  // const history = useHistory();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (projetos[id]) {
      setNome(projetos[id].nome);
      setDescricao(projetos[id].descricao);
    }
  }, [id, projetos]);

  // const handleUpdateProjeto = () => {
  //   servicoProjetos.atualizarProjeto(nome, descricao, projetos, setProjetos, id, () => {});
  //   history.push("/lista-projetos");
  // };

  return (
    <Principal titulo={`Detalhes do Projeto: ${nome}`} voltarPara="/lista-projetos">
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
        <BotaoCustomizado aoClicar={handleUpdateProjeto}>
          Atualizar
        </BotaoCustomizado>
      </div>
    </Principal>
  );
};

export default PaginaDetalhesProjeto;
