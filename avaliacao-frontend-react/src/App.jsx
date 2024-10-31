import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Cabecalho from './comum/componentes/Cabecalho/Cabecalho';
import Rodape from './comum/componentes/Rodape/Rodape';
import PaginaListaProdutos from './paginas/PaginaListaProdutos/PaginaListaProdutos';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';

const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: 'lista',
    element: <PaginaListaProdutos />,
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
