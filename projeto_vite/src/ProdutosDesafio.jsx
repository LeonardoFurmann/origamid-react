import React, { useState } from 'react'
import Produto from './Produto'

const base_url = 'https://ranekapi.origamid.dev/json/api/produto/'


//https://ranekapi.origamid.dev/json/api/produto/tablet
//https://ranekapi.origamid.dev/json/api/produto/smartphone
//https://ranekapi.origamid.dev/json/api/produto/notebook


const ProdutosDesafio = () => {
  const [dados, setDados] = useState(null)
  const [carregando ,setCarregando] = useState(null)

  async function handleClick(event) {
    setCarregando(true)
    const endoint = event.target.innerText
    const response = await fetch(base_url + endoint);
    const dados = await response.json()
    setDados(dados)
    setCarregando(false)
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button onClick={handleClick}>Tablet</button>
        <button onClick={handleClick}>Smartphone</button>
        <button onClick={handleClick}>Notebook</button>
      </div>
      {carregando && <p>Carregando...</p> }
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  )
}

export default ProdutosDesafio