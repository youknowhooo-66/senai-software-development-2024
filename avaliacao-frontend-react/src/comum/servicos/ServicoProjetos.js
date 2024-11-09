// comum/servicos/ServicoProjetos.js

class ServicoProjetos {
    adicionarProjeto(nome, descricao, projetos, setProjetos) {
      if (!nome || !descricao) {
        alert("Preencha o Nome e a Descrição do projeto");
        return;
      }
  
      const novoProjeto = { id: Date.now(), nome, descricao, tarefas: [], membros: [], marcos: [] };
      setProjetos([...projetos, novoProjeto]);
    }
  
    removerProjeto(id, projetos, setProjetos) {
      if (window.confirm("Tem certeza que deseja remover o projeto?")) {
        setProjetos(projetos.filter(projeto => projeto.id !== id));
      }
    }
  
    editarProjeto(id, projetos, setNome, setDescricao, setEditingId) {
      const projeto = projetos.find(proj => proj.id === id);
      setNome(projeto.nome);
      setDescricao(projeto.descricao);
      setEditingId(id);
    }
  
    atualizarProjeto(id, nome, descricao, projetos, setProjetos, setEditingId) {
      if (!nome || !descricao) {
        alert("Preencha o Nome e a Descrição do projeto");
        return;
      }
  
      const projetosEditados = projetos.map(projeto =>
        projeto.id === id ? { ...projeto, nome, descricao } : projeto
      );
      setProjetos(projetosEditados);
      setEditingId(null);
    }
  }
  
  export default ServicoProjetos;
  