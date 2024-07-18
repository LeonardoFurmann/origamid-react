import React, { useState } from 'react'
import Produto from './Produto'
import {UserContext} from './UserContext'

const base_url = 'https://ranekapi.origamid.dev/json/api/produto/'


//https://ranekapi.origamid.dev/json/api/produto/tablet
//https://ranekapi.origamid.dev/json/api/produto/smartphone
//https://ranekapi.origamid.dev/json/api/produto/notebook


const ProdutosDesafio = () => {
  const [dados, setDados] = useState(null)
  const [carregando ,setCarregando] = useState(null)

  const dadosProdutos = React.useContext(UserContext)
  if(dadosProdutos.produto === null) {
    return null
  }
  console.log(dadosProdutos)

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
      <h3>{dadosProdutos.produto[0].nome}</h3>
      <button onClick={dadosProdutos.limpaDados}>Limpar Dados</button>
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