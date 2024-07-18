import React from 'react'
import Home from './Home.jsx'
import ProdutosDesafio from './ProdutosDesafio.jsx'
import {UserStorage} from './UserContext.jsx'

const Titulo = ({texto, children}) => {
  return <h1>{texto}, {children}</h1>
}

const App = () => {

  const { pathname } = window.location;

  return (
    <UserStorage>
      <ul>
        <li><a href="http://localhost:5173/">Home</a></li>
        <li><a href="http://localhost:5173/produtos">Produtos</a></li>
      </ul>
      {pathname.includes('produtos') ? <ProdutosDesafio/> :   <Home/>}  
    </UserStorage>
  )

}

export default App
