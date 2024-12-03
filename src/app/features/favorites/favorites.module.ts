import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoriteListComponent } from './pages/favorite-list/favorite-list.component';


@NgModule({
  declarations: [
    FavoriteListComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }
