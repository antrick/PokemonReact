import React from 'react'
import styles from '../styles/header.module.css'

type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
}

const Header = ({query, setQuery}: HeaderProps) => {
  return (
    <header className={styles.header}>
        <input 
            className={styles.input} 
            placeholder='Buscar pokemon...' 
            type='text' 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
        />
    </header>
  )
}

export default Header
