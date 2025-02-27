import { useState } from 'react'

import './App.css'
import Conversão from './components/Conversão'
import Conversao2 from './components/Conversao2'

function App() {
 
  const [usuario, setUsuario] = useState("Ale")
  const [senha, setSenha] = useState()

 function lerUsuario(){
  let resposta = prompt("Digite o novo usuário:")
  setUsuario(resposta)

  let pw = prompt("Digite a nova senha: ")
  let pw2 = prompt("Confirme a senha: ")
  if(pw == pw2){
    setSenha(pw)
  }
  else{
    alert("As senhas são diferentes.")
  }
 }

  let nome= "Usul"

  return (
    <>
    <Conversão />
    <Conversao2 />
      <h1>ESTADOS</h1>
      Nome:{nome}
      <div>
      Usuário: {usuario} <br />
      Senha: {senha}
      </div>
      <button onClick={lerUsuario}>Trocar Usuário</button>
    </>
  )
}

export default App
