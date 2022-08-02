import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataService } from '../core/services/data.service';
import { ICard, ICardData } from '../shared/card';
import { tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe-decorator';

@AutoUnsubscribe()
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pokemonList: ICardData[] = [];
  eventSub!: Subscription;

  constructor(
    private readonly dataService: DataService,
    private readonly spinnerService: NgxSpinnerService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.spinnerService.show();
    this.eventSub = this.dataService.getCardsByName('name:moltres', 50, 'id,name,images,types')
    .pipe(
      tap((response: ICard) => {
        this.pokemonList = response.data as ICardData[];
        this.spinnerService.hide();
      })
    )
    .subscribe();
  }

  ngOnDestroy() {
    // No need to manually unsubscribe
  }
}
