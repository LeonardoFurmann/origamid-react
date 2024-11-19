import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import MinhasFotos from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import AdicionarFoto from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css'
import { useNavigate } from 'react-router-dom';

const UserHeaderNav = () => {
    const {userLogout} = useContext(UserContext);
    const [mobile, setMobile] = useState(null);
    const navigate = useNavigate();

    function handleLogout(){
        userLogout()
        navigate('/login');
    }

    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end>
                <MinhasFotos/> 
                {mobile && 'MinhasFotos'}
            </NavLink>
            <NavLink to="/conta/estatisticas">
                <Estatisticas/>
                {mobile && 'Estatisticas'}
                </NavLink>
            <NavLink to="/conta/postar">
                <AdicionarFoto/>
                {mobile && 'Adicionar Foto'}
            </NavLink>
            <button onClick={handleLogout}>
                <Sair/>
                {mobile && 'Sair'}
            </button>
        </nav>
    )
}

export default UserHeaderNav