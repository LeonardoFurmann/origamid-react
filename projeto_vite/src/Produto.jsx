import React from 'react'

const Produto = ({nome, propriedades}) => {
  return (
    <div style={{width: "400px", border: "1px solid black"}}>
        <h4>{nome}</h4>
        <ul>
            {propriedades.map((propriedade) => 
                <li key={propriedade}>{propriedade}</li>
            )}
        </ul>
    </div>
  )
}

export default Produto