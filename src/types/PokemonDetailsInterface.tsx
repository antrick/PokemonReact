export interface Pokemon {
    name: string;
    id: number;
    imgSrc: string;
}

export type PokemonDetails = {
    name: string;
    id: number;
    imgSrc: string;
    hp: number;
    attack: number;
    defense: number;
}