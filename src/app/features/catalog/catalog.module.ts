import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ListStyleComponent } from './pages/list-style/list-style.component';
import { CardCategoryComponent } from './components/card-category/card-category.component';
import { FilterCardComponent } from './components/filter-card/filter-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    ProductsPageComponent,
    ListStyleComponent,
    CardCategoryComponent,
    FilterCardComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    SharedModule
  ]
})
export class CatalogModule { }
