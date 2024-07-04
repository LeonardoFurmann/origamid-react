import React from 'react'

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {

  const dados = mario;
  let total = dados.compras.map(item => +item.preco.replace('R$ ', '')).reduce((a,b) => a + b)

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? "Ativa" : "Inativo"}</span></p>
      Compras:
      <ul>
        {dados.compras.map(({nome, preco}) => 
          <li key={nome}>{nome} - {preco}</li>
        )}
      </ul>
      <p>Total: {total}</p>
      {total > 10000 && <p>Compra maior que 10000!</p>}

    </>
  )
}

export default App
