import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'

const UserHeaderNav = () => {
    const {userLogout} = useContext(UserContext);

    return (
        <nav>
            <NavLink to="/conta">Minhas Fotos</NavLink>
            <NavLink to="/conta/estatisticas">Estatísticas</NavLink>
            <NavLink to="/conta/postar">Adicionar Foto</NavLink>
            <button onClick={userLogout}>Sair</button>
        </nav>
    )
}

export default UserHeaderNav