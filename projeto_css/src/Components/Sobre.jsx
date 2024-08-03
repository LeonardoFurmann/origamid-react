import React from 'react'
import { useNavigate } from 'react-router-dom'


const Sobre = () => {
    const navigate= useNavigate();

    function handleClink(){
        navigate('/')
    }
    return (
        <>
            <div>Sobre</div>
            <button onClick={handleClink}>Login</button>
        </>
    )
}

export default Sobre