import { Result } from './../interface/pokemon';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public singlePokemon: Result;
  @Input() public index: number;

  public imgPathFront: string;
  public imgPathBack: string;
  public flip: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // I am having problems handleing asyc events.
    setInterval(() => {
      this.imgPathFront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.index + 1}.png`
      this.imgPathBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.index + 1}.png`
      clearInterval()
    }, 3000)
  }

  onClick() {
    this.flip = !this.flip;
  }





}
