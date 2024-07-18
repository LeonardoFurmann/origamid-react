import React, { useEffect, useRef, useState } from 'react'
import ProdutosPreferencia from './ProdutosPreferencia'
import Comentarios from './Comentarios'
import OperacaoLenta from './OperacaoLenta'

const Home = () => {
  

  return (
    <>
      <h1>Home</h1>
      <h2>Essa é a home do site</h2>
      <Comentarios />
      <ProdutosPreferencia />
      <OperacaoLenta />
    </>
  )
}

export default Home