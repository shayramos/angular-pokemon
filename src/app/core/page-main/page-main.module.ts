import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMainComponent } from './page-main.component';
import { PokemonListModule } from 'src/app/pokemon-list/pokemon-list.module';

@NgModule({
  exports: [PageMainComponent],
  declarations: [PageMainComponent],
  imports: [
    CommonModule,
    PokemonListModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageMainModule { }
