import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import stylesPokemon from '../styles/pokemonDetails.module.css';
import imgPokeball from '../assets/images/pokeball.png'
import { ItemsDetails } from '../types/PokemonDetailsInterface';
import Footer from '../components/Footer';
import { fetchItemDetails } from '../apis/apiItemsDetails';
import Loading from '../components/Loading';

const Item = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [item, setItem] = useState<ItemsDetails>();
    const navigate = useNavigate();
    const { name } = useParams();

    const goBack = () =>{
        navigate(-1);
    }

    useEffect(() => {
        setIsLoading(true);
        const getItemDetails = async () =>{
            const respItem = await fetchItemDetails(name as string);
            setItem(respItem);
            setIsLoading(false);
        }
        getItemDetails();
    }, [name])

    if(isLoading || (!item)){
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
            <div>Nr. {item?.id}</div>
            <div>
              <img src={item?.srcImg} alt='pokeball' className={stylesPokemon.pokemonInfoImg} />
            </div>
            <div><span className={stylesPokemon.labelPokeball}>Effect: </span>{item?.effect}</div>
            <div><span className={stylesPokemon.labelPokeball}>Short Effect: </span>{item?.shortEffect}</div>
          </main>
        </div>
     <Footer/>
    </>
  )
}

export default Item
