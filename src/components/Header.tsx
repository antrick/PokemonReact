import React from 'react'
import styles from '../styles/header.module.css'

type HeaderProps = {
    query: string;
    placeholder: string;
    setQuery: (query: string) => void;
}

const Header = ({query, placeholder, setQuery}: HeaderProps) => {
  return (
    <header className={styles.header}>
        <input 
            className={styles.input} 
            placeholder={placeholder} 
            type='text' 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
        />
    </header>
  )
}

export default Header
