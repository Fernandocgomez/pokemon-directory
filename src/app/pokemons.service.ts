import { Injectable } from '@angular/core';
import { Pokemon, Result } from './interface/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  fetchPokemons(): Observable<Pokemon>{
    let url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=500'
    return this.http.get<Pokemon>(url);
  }

}
