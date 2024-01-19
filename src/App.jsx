import { useState } from 'react'
import './App.css'
import React from 'react'
import Mensagem from './Mensagem'
import Botao from './Botao'
import Titulo from './Titulo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="chat">
        <Titulo />
        <div className="content">
          <ul>
            <Mensagem mensagem="Cole cpx, bora pra cb hj ?" visualizado={true} remetente={false} />
            <Mensagem mensagem="Vai ta o fluxo 😎" visualizado={true} remetente={false} />
            <Mensagem mensagem="Fala mano, não posso ir hoje" visualizado={true} remetente={true} />
            <Mensagem mensagem="Mathias passou trabalho" visualizado={true} remetente={true} />
            <Mensagem mensagem="Pra domingo de manhã 🤡🤡" visualizado={true} remetente={true} />
          </ul>
        </div>
      </div>
    </>
  )
}

export default App