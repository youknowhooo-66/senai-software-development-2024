import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Cabecalho from './comum/componentes/Cabecalho/Cabecalho';
import Rodape from './comum/componentes/Rodape/Rodape';

import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import PaginaEstoqueVeiculos from './paginas/PaginaEstoqueDeVeiculos/PaginaEstoqueDeVeiculos';

const router = createBrowserRouter([
  {
    path: 'estoque-veiculos',
    element: <PaginaEstoqueVeiculos />
  },
  {
    path: '',
    element: <PaginaInicial />,
  },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;
