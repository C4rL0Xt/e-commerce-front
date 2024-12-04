import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.css'
})
export class CardCategoryComponent {

  constructor(
    private router: Router
  ) { }

  showCatalogProduct(event: MouseEvent) {
    console.log('Showing catalog product');
    event.stopPropagation();
    this.router.navigate(['/products']);
  } 

}
