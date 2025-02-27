import React, { useState } from 'react'
import './Conversao2.css'

function Conversao2() {
    const[km,setKm]= useState(0)
    const[milha,setMilha]=useState(0)
    function converterKmpraMilha(){
        let entrada = Number(prompt("Digite a quilometragem: "))
        setMilha  ((entrada*0.621371).toFixed(4))
        setKm  (entrada)
    }
  return (
    <div className='container-conversao2'>

        <h2>km ➡️ milhas</h2>
        <button onClick={converterKmpraMilha}>Converter</button>
        <p>KM:{km}</p>
        <p>Milha: {milha}</p>
    </div>
  )
}

export default Conversao2