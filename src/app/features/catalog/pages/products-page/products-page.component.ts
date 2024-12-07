import { Component } from '@angular/core';
import { ProductCard } from '../../../../models/productCard.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

  menuOpen = false;
  
  quantityProducts = 567;
  listProducts: ProductCard[] = [
    {
      id: 1,
      description: 'Producto 1',
      price: 1000,
      image: 'assets/images/product-test.jpg'
    },{
      id: 2,
      description: 'Producto 2',
      price: 2000,
      image: 'assets/images/product-test.jpg'
    },{
      id: 3,
      description: 'Producto 3',
      price: 3000,
      image: 'assets/images/product-test.jpg'
    },{
      id: 4,
      description: 'Producto 4',
      price: 4000,
      image: 'assets/images/product-test.jpg'
    }, {
      id: 5,
      description: 'Producto 5',
      price: 5000,
      image: 'assets/images/product-test.jpg'
    },{
      id: 6,
      description: 'Producto 6',
      price: 6000,
      image: 'assets/images/product-test.jpg'
    },{
      id: 7,
      description: 'Producto 7',
      price: 7000,
      image: 'assets/images/product-test.jpg'
    },{
      id: 8,
      description: 'Producto 8',
      price: 8000,
      image: 'assets/images/product-test.jpg'
    }
  ];

  constructor() { 
    this.sendMessage();
  }

  sendMessage() {
    console.log('Sending message');
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

}
