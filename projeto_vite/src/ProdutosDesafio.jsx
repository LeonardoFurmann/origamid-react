import React from 'react'
import Produto from './Produto'

const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

const ProdutosDesafio = () => {
  return (
    <div>
        <h1>Produtos</h1>
        {produtos.map(({nome, propriedades}) =>        
            <Produto key={nome} nome={nome} propriedades={propriedades}/>
        )}
    </div>
  )
}

export default ProdutosDesafio