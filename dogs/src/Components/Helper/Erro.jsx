import React from 'react'

const Erro = ({error}) => {

 if(!error) return null;

  return (
    <p className='error'>{error}</p>
  )
}

export default Erro