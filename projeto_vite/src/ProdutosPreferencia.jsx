import React, { useState, useEffect } from 'react'
import Produto from './Produto'

const base_url = 'https://ranekapi.origamid.dev/json/api/produto/'

const ProdutosPreferencia = () => {
    const [dados, setDados] = useState(null)
    const [produto, setProduto] = useState(null)

    useEffect(() => {
        const produtoLocal =  window.localStorage.getItem("preferencia")
        if (produtoLocal) {
            setProduto(produtoLocal)
        }
    }, [])

    useEffect(() => {
            if (produto) {
                window.localStorage.setItem("preferencia", produto)
            }
        
    }, [produto])

    async function handleClick(event) {
        setProduto(event.target.innerText)


    }

    return (
        <div>
            <h1>Preferência: {produto}</h1>
            <div style={{ display: 'flex', gap: '20px' }}>
                <button onClick={handleClick}>Tablet</button>
                <button onClick={handleClick}>Smartphone</button>
            </div>
            {dados && <Produto dados={dados} />}
        </div>
    )
}

export default ProdutosPreferencia