import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Cabecalho from './comum/componentes/Cabecalho/Cabecalho';
import Rodape from './comum/componentes/Rodape/Rodape';
import PaginaListaProdutos from './paginas/PaginaListaProdutos/PaginaListaProdutos';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import PaginaListaUsuarios from './paginas/PaginaListaUsuario/PaginaListaUsuario';
import PaginaListaTarefas from './paginas/PaginaListaTarefas/PaginaListaTarefas';
import PaginaListaProjetos from './paginas/PaginaListaProjetos/PaginaListaProjetos';
import PaginaDetalhesProjeto from './paginas/PaginaDetalhesProjeto/PaginaDetalhesProjeto';

const router = createBrowserRouter([

  {
    path: 'detalhes',
    element: <PaginaDetalhesProjeto />,
  },
  {
    path: 'projetos',
    element: <PaginaListaProjetos />
  },
  {
    path: 'tarefas',
    element: <PaginaListaTarefas />
  },
  {
    path: 'usuarios',
    element: <PaginaListaUsuarios />
  },
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
