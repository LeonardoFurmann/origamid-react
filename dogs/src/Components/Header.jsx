import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Dogs from '../Assets/dogs.svg?react';

const Header = () => {
  return (
    <div className={styles.header}>

      <nav className='container'>
        <Link to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        <Link to='/login'>Login/Criar</Link>
      </nav>

    </div>
  )
}

export default Header