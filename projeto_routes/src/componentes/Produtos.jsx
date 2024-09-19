import React from 'react'
import styles  from './Produtos.module.css'
import { Link } from 'react-router-dom';
// https://ranekapi.origamid.dev/json/api/produto

const Produtos = () => {

  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then(data => data.json()).then(json => setProdutos(json))
}, [])

 if (produtos == null) return null;
  
  return (
    <section className={styles.produtos + ' animeLeft'}>
      {produtos.map((p) => (
        <Link key={p.id}>
            {/* <img src={p.fotos[0].scr} alt={p.fotos[0].titulo} /> */}
            <h1 className={styles.nome}>{p.nome}</h1>
        </Link>
      ))}
    </section>
  )
}

export default Produtos