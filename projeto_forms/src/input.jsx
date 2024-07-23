import React from 'react'

const input = ({label, id, setValue, ...props}) => {
  return (
    <>
        <label htmlFor={id}>{label}</label>
        <input 
            type="text"     
            id={id} 
            nome={id} 
            onChange={({target}) => setValue(target.value)}
            {...props}
            />
            
    </>
  )
}

export default input