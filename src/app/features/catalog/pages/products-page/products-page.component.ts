import { Component } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

  menuOpen = false;
  

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
