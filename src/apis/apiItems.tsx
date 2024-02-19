import { ItemApi, Items } from "../types/PokemonDetailsInterface";

export async function fetchItems(): Promise<Items[]> {
    const response = await fetch('https://pokeapi.co/api/v2/item');

    if(!response.ok){
        throw new Error('Failed to fetch')
    }

    const jsonResponse = await response.json();
    const results = jsonResponse.results;

    const itemsPromises = results.map(async (item: ItemApi) => {
        const responseDetails = await fetch(item.url);
        const itemDetails = await responseDetails.json();

        return {
            name: item.name,
            id: itemDetails.id,
            srcImg: itemDetails.sprites.default,
        }
    });

    const items = await Promise.all(itemsPromises);

    return items;
}