
export interface PokemonListResponse{
    count: number;
    next: string;
    previous: null;
    results: PokemonList[];
}
export interface PokemonList {
    name: string;
    url?: string;
}

export interface Pokemon {
    base_experience: number;
    height: number;
    id: number;
    weight: number;
    sprites:Sprites;
    name:string;
  }

export interface Sprites {
    back_default?:string;
    back_female?:string;
    back_shiny?:string;
    back_shiny_female?:string;
    front_default?:string;
    front_female?:string;
    front_shiny?:string;
    front_shiny_female?: string;
}