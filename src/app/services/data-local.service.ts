import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  pokemones: Pokemon[] = [];

  constructor(private storage:Storage) { }
  async guardarPokemon(pokemon: Pokemon){
    await this.cargarPokemones();
    let index = this.pokemones.findIndex(_pokemon => _pokemon.id == pokemon.id);
    if(index == -1){
      this.pokemones.push(pokemon);
    }
    this.storage.set('pokemones', this.pokemones);
  }
  async cargarPokemones(){
    const pokemones = await  this.storage.get('pokemones');
    this.pokemones = pokemones || [];
    return this.pokemones;
  }

  async buscarPokemon(name):Promise<Pokemon>{
    await this.cargarPokemones();
    const pokemon:Pokemon = this.pokemones.find( _pokemon => _pokemon.name == name);
    return pokemon;
  }
}
