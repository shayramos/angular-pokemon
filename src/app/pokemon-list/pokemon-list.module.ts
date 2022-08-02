import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonCardModule } from '../pokemon-card/pokemon-card.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    PokemonListComponent
  ],
  exports: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    PokemonCardModule,
    NgxSpinnerModule,
  ]
})
export class PokemonListModule { }
