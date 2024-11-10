import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import MinhasFotos from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import AdicionarFoto from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMEdia';

const UserHeaderNav = () => {
    const { userLogout } = useContext(UserContext);
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = useState(false);

    const {pathname} = useLocation();
    useEffect(() => {
        setMobileMenu(false);
    }, [pathname])


    return (
        <>
            {mobile &&  
            <button 
                aria-label='Menu' 
                onClick={() => setMobileMenu(!mobileMenu)}
                className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
            ></button>}
            <nav 
            className=
            {`${mobile ? styles.navMobile : styles.nav}
            ${mobileMenu && styles.navMobileActive }`}
            >
                <NavLink to="/conta" end>
                    <MinhasFotos />
                    {mobile && 'MinhasFotos'}
                </NavLink>
                <NavLink to="/conta/estatisticas">
                    <Estatisticas />
                    {mobile && 'Estatisticas'}
                </NavLink>
                <NavLink to="/conta/postar">
                    <AdicionarFoto />
                    {mobile && 'Adicionar Foto'}
                </NavLink>
                <button onClick={userLogout}>
                    <Sair />
                    {mobile && 'Sair'}
                </button>
            </nav>
        </>
    )
}

export default UserHeaderNav