import React, { useEffect, useState } from 'react'
import styles from './Produto.module.css'
import { useParams } from 'react-router-dom'

const url = 'https://ranekapi.origamid.dev/json/api/produto/'

const Produto = () => {

    const { id } = useParams();
    const [produto, setProduto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function fetchData(url) {
            try {
                setLoading(true)
                const resp = await fetch(url);
                const json = await resp.json();
                setProduto(json)
            } catch (erro) {
                setErro(erro)
            }
            finally {
                setLoading(false);
            }

        }

        fetchData(url + id)
    }, [id]);

    if(produto === null) return null;
    if (erro) return <p>{erro}</p>;
    if (loading) return <div className='loading'>Carregando...</div>;

    return (
        <section className={styles.produto}>
            <div>
                <h1>{produto.nome}</h1>
                <span className={styles.preco}>R${produto.preco}</span>
                <p>{produto.descrico}</p>
            </div>
        </section>
    )
}

export default Produto