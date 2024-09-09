import { useState }  from 'react'


function useState() {
   
  
  
 function mudarCoisasGenericas(){
      console.log(variavel)
      setEstado(estado + 1)
    }
    
let variavel = 0
const [estado, setEstado] = useState(0)

return (
    <div>
      <p>Valor do estado: {estado}</p>
      <p>Valor da variavel: {variavel}</p>
    </div>
  )
}



export default useState
