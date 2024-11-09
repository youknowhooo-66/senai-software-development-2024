class ServicoUsuarios {
    adicionarUsuario(nome, email, usuarios, setUsuarios) {
      if (!nome || !email) {
        alert("Preencha o Nome e Email do usuário");
        return;
      }
  
      const novoUsuario = { nome, email };
      setUsuarios([...usuarios, novoUsuario]);
    }
  
    removerUsuario(index, usuarios, setUsuarios) {
      if (window.confirm("Tem certeza que deseja remover o usuário?")) {
        setUsuarios(usuarios.filter((_, i) => i !== index));
      }
    }
  
    editarUsuario(index, usuarios, setNome, setEmail, setEditingIndex) {
      setNome(usuarios[index].nome);
      setEmail(usuarios[index].email);
      setEditingIndex(index);
    }
  
    atualizarUsuario(nome, email, usuarios, setUsuarios, editingIndex, setEditingIndex) {
      if (!nome || !email) {
        alert("Preencha o Nome e Email do usuário");
        return;
      }
  
      const usuariosEditados = usuarios.map((usuario, index) =>
        index === editingIndex ? { nome, email } : usuario
      );
      setUsuarios(usuariosEditados);
      setEditingIndex(null);
    }
  }
  
  export default ServicoUsuarios;
  