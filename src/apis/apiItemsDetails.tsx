import { ItemsDetails } from "../types/PokemonDetailsInterface";

export async function fetchItemDetails(name: string): Promise<ItemsDetails> {
    const response = await fetch(`https://pokeapi.co/api/v2/item/${name}/`);

    if(!response.ok){
        throw new Error('Failed to fetch details');
    }

    const result = await response.json();

    const itemDetails = {
        name: result.name,
        id: result.id,
        srcImg: result.sprites.default,
        effect: result.effect_entries[0].effect,
        shortEffect: result.effect_entries[0].short_effect
    }

    return itemDetails;
}