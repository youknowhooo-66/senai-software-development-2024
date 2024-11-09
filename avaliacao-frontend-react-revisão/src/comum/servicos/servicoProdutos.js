class ServicoProdutos {

    listar() {
        const produtosDoLocalStorage = localStorage.getItem(
          'lista-produtos'
        );
        if (produtosDoLocalStorage) {
          return JSON.parse(produtosDoLocalStorage);
        }
    
        return [];
      }


      cadastrarProduto(novoProduto) {
        const produtosDoLocalStorage = this.listar();
        produtosDoLocalStorage.push(novoProduto);
        localStorage.setItem(
          'lista-produtos',
          JSON.stringify(produtosDoLocalStorage)
        );
      }
    
      editarProduto(produto) {
        const produtosDoLocalStorage = this.listar();
        const indexProdutos = produtosDoLocalStorage.findIndex(
          (p) => p.id === +produto.id
        );
        produtosDoLocalStorage[indexProdutos] = produto;
        localStorage.setItem(
          'lista-produtos',
          JSON.stringify(produtosDoLocalStorage)
        );
      }

      excluirProduto(idProduto) {
        const produtosDoLocalStorage = this.listar();
    
        const listaAtualizada = produtosDoLocalStorage.filter(
          (p) => {
            return p.id !== idProduto;
          }
        );
          
      localStorage.setItem(
        'lista-produtos',
        JSON.stringify(listaAtualizada)
      );
      return listaAtualizada;
    }

}

export default ServicoProdutos;