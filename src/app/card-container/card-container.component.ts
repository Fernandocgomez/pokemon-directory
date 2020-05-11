import { Pokemon, Result } from './../interface/pokemon';
import { PokemonsService } from './../pokemons.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  @Input() public pokemons: Result[];

  constructor() { }

  ngOnInit(): void {

  }

}
