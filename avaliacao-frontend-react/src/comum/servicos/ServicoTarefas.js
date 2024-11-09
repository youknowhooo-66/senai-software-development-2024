// comum/servicos/ServicoTarefas.js

class ServicoTarefas {
  adicionarTarefa(titulo, descricao, tarefas, setTarefas) {
    if (!titulo || !descricao) {
      alert("Preencha o Título e a Descrição da tarefa");
      return;
    }

    const novaTarefa = { titulo, descricao };
    setTarefas([...tarefas, novaTarefa]);
  }

  removerTarefa(index, tarefas, setTarefas) {
    if (window.confirm("Tem certeza que deseja remover a tarefa?")) {
      setTarefas(tarefas.filter((_, i) => i !== index));
    }
  }

  editarTarefa(index, tarefas, setTitulo, setDescricao, setEditingIndex) {
    setTitulo(tarefas[index].titulo);
    setDescricao(tarefas[index].descricao);
    setEditingIndex(index);
  }

  atualizarTarefa(titulo, descricao, tarefas, setTarefas, editingIndex, setEditingIndex) {
    if (!titulo || !descricao) {
      alert("Preencha o Título e a Descrição da tarefa");
      return;
    }

    const tarefasEditadas = tarefas.map((tarefa, index) =>
      index === editingIndex ? { titulo, descricao } : tarefa
    );
    setTarefas(tarefasEditadas);
    setEditingIndex(null);
  }
}

export default ServicoTarefas;
