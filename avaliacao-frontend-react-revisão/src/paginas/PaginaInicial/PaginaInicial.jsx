import { useNavigate } from 'react-router-dom';
import Principal from '../../comum/componentes/Principal/Principal';
import BotaoCustomizado from '../../../../../aulas-frontend-pwa/src/comum/componentes/BotaoCustomizado/BotaoCustomizado';
import './PaginaInicial.css';

const PaginaInicial = () => {
  const navigate = useNavigate();

  return <Principal titulo="Página Inicial">
    <BotaoCustomizado
        aoClicar={() => navigate('/lista')}
      >
        Lista de Produtos
      </BotaoCustomizado>
  </Principal>
};

export default PaginaInicial;
