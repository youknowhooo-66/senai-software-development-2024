  import './Rodape.css';

  function Rodape() {
    const anoAtual = new Date().getUTCFullYear();
    return <footer className='rodape_root'>Copyright © {anoAtual} - Todos os direitos reservados - Maycon Gibson.</footer>;
  }

  export default Rodape;
