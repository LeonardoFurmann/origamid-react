import styled from 'styled-components'
import Produto from "./Components/Produto"
import { useState } from 'react'

const ProdutosContainer = styled.div`
    display: flex;
    color: green;
    flex-direction: column;
`

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`

const Paragrafo = styled.p`
  font-size: 1rem;
  color: ${({ cor }) => cor};
  background: hsl(${Math.random() * 360}, 100%, 50%);
`

const Button = styled.button`
  background: ${({ ativo }) => ativo ? '#000' : '#fff'};
  font-size: 1rem;
  color: ${({ ativo }) => ativo ? '#fff' : '#000'};
  &:hover{
    background: tomato;
  }
`

function App() {

  const [ativo, setAtivo] = useState(false)

  function handleClick(){
    setAtivo(!ativo)
  }

  return (
    <>
      <ProdutosContainer>
        <Produto />
        <Titulo>Teste</Titulo>
        <Paragrafo  cor="#green">Teste</Paragrafo>
        <Button ativo={ativo} onClick={handleClick}>Ativar</Button>
      </ProdutosContainer>
    </>
  )
}

export default App
