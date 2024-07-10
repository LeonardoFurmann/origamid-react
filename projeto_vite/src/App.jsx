import React from 'react'
import Header from './Header.jsx'
import ProdutosExercicio from './ProdutosExercicio.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import ProdutosDesafio from './ProdutosDesafio.jsx'

const Titulo = ({texto, children}) => {
  return <h1>{texto}, {children}</h1>
}

const App = () => {

  const { pathname } = window.location;
  console.log(pathname.includes('produtos'))

  return (
    <>
      {/* <Header/>
      <Titulo  texto="Titulo">
        <p>Isso é o children</p>
      </Titulo>
      <ProdutosExercicio />
      <Footer/> */}
      <ul>
        <li><a href="http://localhost:5173/">Home</a></li>
        <li><a href="http://localhost:5173/produtos">Produtos</a></li>
      </ul>
      {pathname.includes('produtos') ? <ProdutosDesafio/> :   <Home/>}    
    </>
  )

}

export default App
