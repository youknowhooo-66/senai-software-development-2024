import Bakugo from './Bakugo'
import './Body.css'
import DragonBall from './DragonBall'

function Body() {
  return (
    <div className='body-container'>
      <h2 className='tituloDois'>Teste do body</h2>
      <img className="imagens-body" src="./images/Izuku.webp" />
      <DragonBall />
      <Bakugo />
    </div>
  )
}

export default Body
