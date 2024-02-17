import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import imgPokeball from '../assets/images/pokeball.png'
import Footer from '../components/Footer';

import stylesPokemon from '../styles/pokemonDetails.module.css';
// import imgBulbasur from '../assets/images/bulbasaur.gif';
import { PokemonDetails } from '../types/PokemonDetailsInterface';
import { getPokemonDetails } from '../apis/apiPokemon';
import Loading from '../components/Loading';

const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [objPokemon, setObjPokemon] = useState<PokemonDetails>();
    const { name } = useParams();
    const navigate = useNavigate();

    const goBack = () =>{
      navigate(-1);
    }

    useEffect(() => {
      setIsLoading(true);
      async function getPokemon(){
        const fetchPokemonDetails = await getPokemonDetails(name as string);
        setObjPokemon(fetchPokemonDetails);
        setIsLoading(false);
      }
      getPokemon();
    }, [name])
    
    if(isLoading || (!objPokemon)){
      return <Loading />
    }

    return (
      <>
        <button onClick={goBack} className={stylesPokemon.pokeballButton}>
          <img src={imgPokeball} alt='pokeball' className={stylesPokemon.pokeballImg}/>
          Go Back
        </button>
        <div className={stylesPokemon.pokemon}>
          <main className={stylesPokemon.pokemonInfo}>
            <div className={stylesPokemon.pokemonTitle}>{name}</div>
            <div>Nr. {objPokemon?.id}</div>
            <div>
              <img src={objPokemon?.imgSrc} alt='pokemon' className={stylesPokemon.pokemonInfoImg} />
            </div>
            <div>HP: {objPokemon?.hp}</div>
            <div>Attack: {objPokemon?.attack}</div>
            <div>Defense: {objPokemon?.defense}</div>
          </main>
        </div>
        <Footer/>
      </>
    )
}

export default Pokemon
