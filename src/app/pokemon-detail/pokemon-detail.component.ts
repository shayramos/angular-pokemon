import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataService } from '../core/services/data.service';
import { ICardData, ICardDetail } from '../shared/card';
import { tap } from 'rxjs/operators';

// @AutoUnsubscribe()
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {

  pokemonDetail = {} as ICardData;
  eventSub!: Subscription;

  constructor(private route: ActivatedRoute,
    private readonly dataService: DataService,
    private readonly spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id',) as string;
    this.spinnerService.show();
    this.eventSub = this.dataService.getCard(id, 'id,name,images,types,attacks,weaknesses')
    .pipe(
      tap((response: ICardDetail) => {
        this.pokemonDetail = response?.data as ICardData;
        this.spinnerService.hide();
      })
    )
    .subscribe();
  }

  ngOnDestroy() {
    // No need to manually unsubscribe
  }
}
