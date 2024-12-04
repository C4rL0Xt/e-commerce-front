import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ListStyleComponent } from './pages/list-style/list-style.component';

const routes: Routes = [
  {
    path: 'list-style/:gender',
    component: ListStyleComponent
  },
  {
    path: 'products/:styleId',
    component: ProductsPageComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
