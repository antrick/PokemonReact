import { Pokemon } from "../types/PokemonDetailsInterface";

interface ObjPokemon {
    name: string;
    url: string;
    // id: number;
    // imgSrc: string;
}

export async function fetchPokemons(): Promise<Pokemon[]> {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");

    if(!response.ok){
        throw new Error('Failed to fetch')
    }


    const jsonResponse = await response.json();
    const results = jsonResponse.results;

    const pokemons = results.map(async (pokemon: ObjPokemon) =>{
        
        const detailsResponse = await fetch(pokemon.url);
        const pokemonDetails = await detailsResponse.json();
        return {
            name: pokemon.name,
            id: pokemonDetails.id,
            imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`,
        }
    })

    
    
    return pokemons;
}