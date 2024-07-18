import React, { useMemo } from 'react'

const OperacaoLenta = () => {

function operacaoLenta(){
    let c
    for(let i = 0; i < 100000; i++){
        c = i + 1 /10
    }
    return c;
}

const valor = useMemo(() =>operacaoLenta(), [] )   
  return (
    <div>{valor}</div>
  )
}

export default OperacaoLenta