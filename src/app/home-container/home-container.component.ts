import { Result } from './../interface/pokemon';
import { PokemonsService } from './../pokemons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  // I would like to have all my objs on my service so all my compompones will have access to it.
  // Maybe implementing something like Redux we can acomplish this. 

  public pokemons: Result[];

  constructor(private pokemomsService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemomsService.fetchPokemons().subscribe((data) => {
      this.pokemons = data.results;
    })
  }

}

