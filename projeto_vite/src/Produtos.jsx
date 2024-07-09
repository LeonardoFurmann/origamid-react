import React from 'react'

const listaProdutos = [
    {
        id: 1,
        nome: 'Smartphone',
        preco: 'R$ 2000',
        cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
        id: 2,
        nome: 'Notebook',
        preco: 'R$ 3000',
        cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
        id: 3,
        nome: 'Tablet',
        preco: 'R$ 150',
        cores: ['#365069', '#47c1c8', '#f95786'],
    },
];

const Produtos = () => {
    
    const produtosFiltrados = listaProdutos.filter(({preco}) => +preco.replace('R$ ', '') > 1500);
    
    return (
        <div style={{width: '500px'}}>
            {produtosFiltrados.map((produto) =>
                <div key={produto.id}>
                    <h1>{produto.nome}</h1>
                    <h2>{produto.preco}</h2>
                    <ul>
                        {produto.cores.map((cor) => 
                            <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>{cor}</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Produtos
