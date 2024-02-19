import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// import imgBulbasur from '../assets/images/bulbasaur.gif';

import stylesMain from '../styles/pokemons.module.css';
import { fetchPokemons } from '../apis/apiPokemons';
import { Pokemon } from '../types/PokemonDetailsInterface';
import Loading from '../components/Loading';


const Pokemons = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
      const fetchAllPokemons = async() => {
        setIsLoading(true);
        const allPokemonsPromises  = await fetchPokemons();
        const allPokemons = await Promise.all(allPokemonsPromises); // Espera a que todas las promesas se resuelvan
        setPokemons(allPokemons);
        setIsLoading(false);
      }
      fetchAllPokemons();
    }, [])
    

    if(isLoading || (!pokemons)){
      return <Loading />
    }

    const filterPokemons = pokemons.slice(0,151).filter((pokemon) => {
      return pokemon.name.toLocaleLowerCase().match(query.toLocaleLowerCase())
    });
    

  return (
      <>
        <Header query={query} setQuery={setQuery} placeholder='Buscar pokemon...'/>
        <main>
              <nav className={stylesMain.nav}>
                {filterPokemons?.slice(0,151).map((pokemon) => (
                  <div key={pokemon.id}>
                    <Link key={pokemon.id} to={`/pokemons/${pokemon.name}`} className={stylesMain.listItem}>
                      <img 
                        className={stylesMain.listItemIcon}
                        src={pokemon.imgSrc} 
                        alt={pokemon.name}
                      />
                      <div className={stylesMain.listItemText}>
                        <span>{pokemon.name}</span>
                        <span>{pokemon.id}</span>
                      </div>
                    </Link>
                  </div>
                ))}
              
              </nav>
        </main>
        <Footer/>
      </>
  )
}

export default Pokemons
