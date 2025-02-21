import { useState } from 'react'

import './App.css'

function App() {
 
  const [usuario, setUsuario] = useState("Ale")

 function lerUsuario(){
  let resposta = prompt("Digite o novo usuário:")
  setUsuario(resposta)
 }

  let nome= "Usul"

  return (
    <>
      <h1>ESTADOS</h1>
      Nome:{nome}
      <div>
      Usuário: {usuario}
      </div>
      <button onClick={lerUsuario}>Trocar Usuário</button>
    </>
  )
}

export default App
