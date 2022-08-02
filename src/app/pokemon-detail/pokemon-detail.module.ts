import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PokemonDetailRoutingModule,
  ],
  declarations: [
    PokemonDetailComponent
  ],
  exports: [
    PokemonDetailComponent
  ],
})
export class PokemonDetailModule { }
