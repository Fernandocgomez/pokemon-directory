import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public img: any = require('../../assets/pokeapi_256.png')

  constructor() { }

  ngOnInit(): void {
  }

}


