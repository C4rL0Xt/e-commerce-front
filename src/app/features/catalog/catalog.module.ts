import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ListStyleComponent } from './pages/list-style/list-style.component';
import { CardCategoryComponent } from './components/card-category/card-category.component';


@NgModule({
  declarations: [
    ProductsPageComponent,
    ListStyleComponent,
    CardCategoryComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    SharedModule
  ]
})
export class CatalogModule { }
