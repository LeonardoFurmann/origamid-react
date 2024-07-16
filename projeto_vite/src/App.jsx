import React from 'react'
import Home from './Home.jsx'
import ProdutosDesafio from './ProdutosDesafio.jsx'
import { useState } from 'react'

const Titulo = ({texto, children}) => {
  return <h1>{texto}, {children}</h1>
}

const App = () => {

  const { pathname } = window.location;

  return (
    <>
      <ul>
        <li><a href="http://localhost:5173/">Home</a></li>
        <li><a href="http://localhost:5173/produtos">Produtos</a></li>
      </ul>
      {pathname.includes('produtos') ? <ProdutosDesafio/> :   <Home/>}  
    </>
  )

}

export default App
