import React from 'react'
import styles from './Produto.module.css'
import { NavLink , Outlet, useParams} from 'react-router-dom'

const Produto = () => {

    const params = useParams();

    return (
        <div className='container'>
            <div className={styles.titulo}>Produto {params.id}</div>
            <nav>
                <NavLink to="">Descrição</NavLink>
                <NavLink to="avaliacao">Avaliação</NavLink>
                <NavLink to="customizado">Customizado</NavLink>
            </nav>
           <Outlet/>
        </div>
    )
}

export default Produto