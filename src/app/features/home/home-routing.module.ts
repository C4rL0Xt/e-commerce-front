import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductsPageComponent } from '../catalog/pages/products-page/products-page.component';
import { CartComponent } from '../shopping-cart/pages/cart/cart.component';
import { UserProfileComponent } from '../profile/pages/user-profile/user-profile.component';
import { FavoriteListComponent } from '../favorites/pages/favorite-list/favorite-list.component';
import { ListStyleComponent } from '../catalog/pages/list-style/list-style.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'style',
    //component: ListStyleComponent,
    loadChildren: () => import('../catalog/catalog.module').then(m => m.CatalogModule)
  }, 
  {
    path: 'cart',
    component: CartComponent,
    loadChildren: () => import('../shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'favorites',
    component: FavoriteListComponent,
    loadChildren: () => import('../favorites/favorites.module').then(m => m.FavoritesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
