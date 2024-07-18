import React, { useEffect, useRef, useState } from 'react'

function Comentarios() {
    const [comentarios, setComentarios] = useState(['teste', 'teste2'])
    const [input, setInput] = useState('')
    const inputElemet = useRef()

    function handleClick() {
        setComentarios([...comentarios, input])
        setInput('')
        inputElemet.current.focus()
    }
    return (
        <>
            <ul>
                {comentarios.map((comentario) => <li key={comentario}>{comentario}</li>)}
            </ul><input ref={inputElemet} type="text" value={input} onChange={({ target }) => setInput(target.value)} /><br /><button onClick={handleClick}>Enviar</button>
        </>
    )
}

export default Comentarios