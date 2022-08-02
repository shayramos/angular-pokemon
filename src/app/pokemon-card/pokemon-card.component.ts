import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ICardData } from '../shared/card';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit, OnDestroy {

  @Input() card = {} as ICardData;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // No need to manually unsubscribe
  }
}
