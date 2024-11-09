import { useNavigate } from 'react-router-dom';
import Principal from '../../comum/componentes/Principal/Principal';
import BotaoCustomizado from '../../../../../aulas-frontend-pwa/src/comum/componentes/BotaoCustomizado/BotaoCustomizado';
import './PaginaInicial.css';

const PaginaInicial = () => {
  const navigate = useNavigate();

  return <Principal titulo="Página Inicial">
   
    <div>
    <BotaoCustomizado
        aoClicar={() => navigate('/detalhes')}
      >
        Detalhes dos Projetos
      </BotaoCustomizado>
      <BotaoCustomizado
        aoClicar={() => navigate('/projetos')}
      >
        Lista de Projetos
      </BotaoCustomizado>
      <BotaoCustomizado
        aoClicar={() => navigate('/tarefas')}
      >
        Lista de Tarefas
      </BotaoCustomizado>
      <BotaoCustomizado
        aoClicar={() => navigate('/usuarios')}
      >
        Lista de Usuatios
      </BotaoCustomizado>
      <BotaoCustomizado
        aoClicar={() => navigate('/lista')}
      >
        Lista de Produtos
      </BotaoCustomizado>
    </div>

  </Principal>;
};

export default PaginaInicial;
