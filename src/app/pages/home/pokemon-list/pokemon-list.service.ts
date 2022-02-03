import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {


  constructor(
    private http: HttpClient
    ) { }

  // Traer pokemons
  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=100`);
  }

  //Traer los datos de cada pokemon
  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${ name }`);
  }
}
