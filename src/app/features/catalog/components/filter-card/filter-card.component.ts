import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-card',
  templateUrl: './filter-card.component.html',
  styleUrl: './filter-card.component.css'
})
export class FilterCardComponent {
  
  @Input() title!: string;
  @Input() type!: string;

  categories: string[] = ['Polos', 'Pantalones', 'Blazer'];
  sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL'];
  colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  selectedColor: string = '';
  materials: string[] = ['Algodón', 'Lana', 'Seda', 'Cuero', 'Poliéster'];
  seasons: string[] = ['Primavera', 'Verano', 'Otoño', 'Invierno'];
  prices: string[] = ['S/ 0.00 - S/ 50.00', ' S/ 50.00 - S/ 100.00', 'S/ 100.00 a más'];
  
  expanded: boolean = true;

  toggleSize(): void {
    this.expanded = !this.expanded;
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }
}
