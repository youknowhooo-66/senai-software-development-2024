class ServicoVeiculo {
    formatarPreco(preco) {
      return preco
        .replace(/\D/g, "") // Remove caracteres não numéricos
        .replace(/(\d)(\d{2})$/, "$1,$2") // Adiciona a vírgula antes dos últimos dois dígitos
        .replace(/(?=(\d{3})+(\D))\B/g, "."); // Adiciona pontos a cada grupo de três dígitos
    }
  
    adicionarVeiculo(marcaNome, ano, preco, veiculos, setVeiculos) {
      if (!marcaNome || !ano || !preco) {
        alert("Preencha todos os campos.");
        return;
      }
  
      const novoVeiculo = { marcaNome, ano, preco: this.formatarPreco(preco), vendido: false };
      setVeiculos([...veiculos, novoVeiculo]);
    }
  
    removerVeiculo(index, veiculos, setVeiculos) {
      const veiculoNome = veiculos[index].marcaNome;
      if (window.confirm(`Tem certeza que deseja excluir o veículo: ${veiculoNome}?`)) {
        setVeiculos(veiculos.filter((_, i) => i !== index));
      }
    }
  
    editarVeiculo(index, veiculos, setMarcaNome, setAno, setPreco, setEditingIndex) {
      setMarcaNome(veiculos[index].marcaNome);
      setAno(veiculos[index].ano);
      setPreco(veiculos[index].preco);
      setEditingIndex(index);
    }
  
    atualizarVeiculo(marcaNome, ano, preco, veiculos, setVeiculos, editingIndex, setEditingIndex) {
      if (!marcaNome || !ano || !preco) {
        alert("Preencha todos os campos.");
        return;
      }
  
      const veiculosEditados = veiculos.map((veiculo, index) =>
        index === editingIndex ? { marcaNome, ano, preco: this.formatarPreco(preco), vendido: veiculo.vendido } : veiculo
      );
      setVeiculos(veiculosEditados);
      setEditingIndex(null);
    }
  
    marcarVendido(index, veiculos, setVeiculos) {
      const veiculosEditados = veiculos.map((veiculo, i) =>
        i === index ? { ...veiculo, vendido: !veiculo.vendido } : veiculo
      );
      setVeiculos(veiculosEditados);
    }
  }
  
  export default ServicoVeiculo;
  