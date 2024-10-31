import './PaginaListaProdutos.css';
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ServicoProduto from '../../comum/servicos/ServicoProduto';

const PaginaListaProdutos = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState([]);
    const [preco, setPreco] = useState([]);
    
    const [descricao1, setDescricao1] = useState('');
    const [descricao2, setDescricao2] = useState('');
    // const [tarefas, setTarefas] = useState([]);

// const salvar = () => {
//     const novoCliente = {nome, preco};

//     ServicoProduto.salvar(novoProduto);
//     navigate('/cadastro-produtos');
// }; 
const salvar = () => {
    setNome([...nome, descricao1]);
    setPreco([...preco, descricao2]);
    setDescricao1('');
    setDescricao2('');

    if(descricao1 == ''){
        alert('Preencha o Nome do produto')
    }
    if(descricao2 == ''){
        alert('Preencha o Preço do produto')
    }
    if(descricao1 == '' && descricao2 == ''){
        alert('Não há produtos para listar.')
    }
};
return (
<Principal
titulo='Lista de Produtos ()'
>
<div className="campo">
<label>Nome: </label>
<input type="text" placeholder="Nome do produto" value={descricao1} onChange={(e) => setDescricao1(e.target.value)} />
</div>

<div className="campo">
<label>Preço: </label>
<input
type="number"
placeholder="Preço do produto" value={descricao2} onChange={(e) => setDescricao2(e.target.value)}
/>
</div>
<div className='botao'>
<BotaoCustomizado cor='secundaria' aoClicar={salvar}>
Adicionar
</BotaoCustomizado>
</div>
        {
        nome.map((item1, index1) => {
          return <div key={index1}>Nome: {item1}</div>;
          })}
        {preco.map((item, index) => {
          return <div key={index}>Preço: {item}</div>;
        })}

</Principal>
)
}

export default PaginaListaProdutos