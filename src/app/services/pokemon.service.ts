import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PokemonListResponse, Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }
  getTopPokemons(): Observable<PokemonListResponse>{
    return this.http.get<PokemonListResponse>(environment.apiurl);
  }
  getPokemonByName(name:string):Observable<Pokemon>{
    return this.http.get<Pokemon>(environment.apiurl+name);
  }
}
