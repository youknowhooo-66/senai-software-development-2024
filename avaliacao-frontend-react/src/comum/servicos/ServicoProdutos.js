// comum/servicos/ServicoProduto.js

class ServicosProdutos {
    formatarPreco(preco) {
      return preco
        .replace(/\D/g, "") // Remove caracteres não numéricos
        .replace(/(\d)(\d{2})$/, "$1,$2") // Adiciona a vírgula antes dos últimos dois dígitos
        .replace(/(?=(\d{3})+(\D))\B/g, "."); // Adiciona pontos a cada grupo de três dígitos
    }
  
    adicionarProduto(nome, preco, produtos, setProdutos) {
      if (!nome || !preco) {
        alert("Preencha o Nome e Preço do produto");
        return;
      }
  
      const novoProduto = { nome, preco: this.formatarPreco(preco) };
      setProdutos([...produtos, novoProduto]);
    }
  
    removerProduto(index, produtos, setProdutos) {
      if (window.confirm("Tem certeza que deseja remover o produto?")) {
        setProdutos(produtos.filter((_, i) => i !== index));
      }
    }
  
    editarProduto(index, produtos, setNome, setPreco, setEditingIndex) {
      setNome(produtos[index].nome);
      setPreco(produtos[index].preco);
      setEditingIndex(index);
    }
  
    atualizarProduto(nome, preco, produtos, setProdutos, editingIndex, setEditingIndex) {
      if (!nome || !preco) {
        alert("Preencha o Nome e Preço do produto");
        return;
      }
  
      const produtosEditados = produtos.map((produto, index) =>
        index === editingIndex ? { nome, preco: this.formatarPreco(preco) } : produto
      );
      setProdutos(produtosEditados);
      setEditingIndex(null);
    }
  }
  
  export default ServicosProdutos;
  