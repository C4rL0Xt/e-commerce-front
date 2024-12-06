import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './features/catalog/pages/products-page/products-page.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Habilita el scroll al inicio
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
