import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokemonList', pathMatch: 'full'},
  {
    path: 'pokemonList',
    component: PokemonListComponent
  },
  {
    path: 'pokemonDetail/:id',
    loadChildren: () => import('./pokemon-detail/pokemon-detail.module').then((m) => m.PokemonDetailModule)
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
