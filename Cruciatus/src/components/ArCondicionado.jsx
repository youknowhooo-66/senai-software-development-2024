import React, { useState } from 'react'

function ArCondicionado() {
  const [inputCelsius, setInputCelsius] = useState()

  function mudouCelsius(event){
    console.log(event)

  }

    return (
    <div>
        <label htmlFor=''>Digite a temperatura em graus Ceçsius: </label>
        <label type='text' className='entrada' value={inputCelsius} onChange={mudouCelsius}  />
        <button >Converter</button>
    </div>
  )
  

}

export default ArCondicionado
