import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <NavLink to="/" end activeStyle={{color: 'tomato'}} >Home</NavLink> | 
        <NavLink to="sobre" activeStyle={{color: 'tomato'}}>Sobre</NavLink>  |
        <NavLink to="produto/notebook">Notebook</NavLink>
        <NavLink to="produto/celular">Celular</NavLink>
    </nav>
  )
}

export default Header