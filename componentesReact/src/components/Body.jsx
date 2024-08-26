import './Body.css'
import DragonBall from './DragonBall'

function Body() {
  return (
    <div className='body-container'>
    
    <div className='input-nome'>
      <label className='nome-input'>Digite seu nome: </label>
      <input className='nome-input' type='text' placeholder='"Nome"' />
    </div>
    
    <div className='input-idade'>
      <label className='idade-input'>Digite sua idade: </label>
      <input className='idade-input' type='text' placeholder='"idade"' />
    </div>
      
      <h2 className='tituloDois'>Teste do body</h2>
      <img className="imagens-body" src="./images/Izuku.webp" /> <DragonBall />
    </div>
  )
}

export default Body
