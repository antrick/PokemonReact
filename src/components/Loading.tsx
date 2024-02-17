import React from 'react'

import imgPokedex from '../assets/images/pokedex.png';
import stylesLoading from '../styles/loading.module.css';

const Loading = () => {
  return (
    <div className={stylesLoading.loadingScreen}>
        <div className={stylesLoading.loadingContent}>
            <img src={imgPokedex} alt='pokedex' className={stylesLoading.loadingScreenIcon} />
            <p className={stylesLoading.textLoading}>Loading...</p>
        </div>
    </div>
  )
}

export default Loading
