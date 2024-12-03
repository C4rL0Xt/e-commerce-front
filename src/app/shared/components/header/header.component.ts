import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuOpen = false;
  currentContent: string = '';
  dropdownVisible: boolean = false;
  hideTimeout: any;

  constructor() { }

  ngOnInit(): void { }

  showDropdown(content: string): void {
    // Muestra el menú desplegable y cambia el contenido
    this.currentContent = content;
    this.dropdownVisible = true;

    // Cancela cualquier temporizador de ocultación activo
    this.cancelHideTimeout();
  }

  startHideTimeout(): void {
    // Establece un temporizador para ocultar el menú desplegable después de un corto tiempo
    this.hideTimeout = setTimeout(() => {
      this.dropdownVisible = false;
    }, 200); // Ajusta el tiempo según sea necesario
  }

  cancelHideTimeout(): void {
    // Cancela el temporizador de ocultación si el cursor está en el menú
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  search(): void {
    console.log('toy buscanding ...');
  }

}
