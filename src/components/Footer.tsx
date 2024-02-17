import React from 'react'
import { Link } from 'react-router-dom';

import stylesFooter from '../styles/footer.module.css'

import imgPikachu from '../assets/images/pikachu.png'
import imgItems from '../assets/images/pokeball.png'
import imgLocation from '../assets/images/pointer.png'

const Footer = () => {
  return (
    <footer className={stylesFooter.footer}>
        <Link to="/pokemons" className={stylesFooter.footerLink}>
            <img src={imgPikachu} alt='pikachu' className={stylesFooter.footerIcon} />
            Pokemons
        </Link>
        <Link 
            onClick={(e) => e.preventDefault()}
            to="/items" 
            className={stylesFooter.footerLink}
        >
            <img src={imgItems} alt='items' className={stylesFooter.footerIcon} />
            Items
        </Link>
        <Link 
            onClick={(e) => e.preventDefault()}
            to="/location" 
            className={stylesFooter.footerLink}
        >
            <img src={imgLocation} alt='location' className={stylesFooter.footerIcon} />
            Map
        </Link>
    </footer>
  )
}

export default Footer