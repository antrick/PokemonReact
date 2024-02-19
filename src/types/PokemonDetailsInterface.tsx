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

export interface ItemApi {
    name: string;
    url: string;
}

export type Items = {
    name: string;
    id: number;
    srcImg: string;
}

export type ItemsDetails = {
    name: string;
    id: number;
    srcImg: string;
    effect: string;
    shortEffect: string;
}