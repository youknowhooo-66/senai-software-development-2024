import { useState } from 'react';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';

const PaginaListaTarefas = () => {
  const [descricao, setDescricao] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarNaLista = () => {
    setTarefas([...tarefas, descricao]);
    setDescricao('');
    document.getElementById('campoDescricao').focus();
  };

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
      <div>
        <input
        id='campoDescricao'
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          onKeyUp={(e)} => {
            if (e.key === 'Enter') {
            adicionarNaLista()
          }
        }}
        />
        <BotaoCustomizado aoClicar={adicionarNaLista}>
          +
        </BotaoCustomizado>
      </div>
      <ul>
        {tarefas.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </Principal>
  );
};

export default PaginaListaTarefas;
