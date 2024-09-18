import React from 'react'
import styles  from './Contato.module.css'
import foto from '../img/contato.jpg'
import Haed from './Haed'

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      {/* <Haed title="Contato" description="Entre em contato"/> */}
      <img src={foto} alt="" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato