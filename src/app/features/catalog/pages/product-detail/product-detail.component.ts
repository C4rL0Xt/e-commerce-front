import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  products: string[] = []; // Lista completa de productos
  displayedProducts: string[] = []; // Productos visibles en el carrusel
  productsToLoad = 8;

  colors: string[] = ['red', 'blue', 'green']; // Lista de colores disponibles
  sizes: string[] = ['M', 'L', 'XL']; // Lista de tallas disponibles
  selectedSize: string | null = null; // Talla seleccionada inicialmente
 // Colores disponibles
  colorTitles: { [key: string]: string } = { // Títulos de los colores
    red: 'Rojo',
    blue: 'Azul',
    green: 'Verde'
  };
  selectedColor: string | null = null; // Color seleccionado inicialmente

  ngOnInit(): void {
    // Simula una lista de productos (podrías cargarla desde un servicio)
    this.products = Array.from({ length: 20 }, (_, i) => `Producto ${i + 1}`);
    this.loadMoreProducts();
  }

  selectSize(size: string): void {
    this.selectedSize = size; // Cambia la talla seleccionada
  }

  selectColor(color: string): void {
    this.selectedColor = color; // Cambia el color seleccionado
  }

  loadMoreProducts(): void {
    const nextProducts = this.products.splice(0, this.productsToLoad);
    this.displayedProducts = [...this.displayedProducts, ...nextProducts];
  }

  onScroll(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.scrollWidth - target.scrollLeft <= target.clientWidth + 50) {
      // Carga más productos al llegar al final del scroll
      this.loadMoreProducts();
    }
  }
  
}
