import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StykeServiceService } from '../../services/styke-service.service';
import { Style } from '../../models/style.interface';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent implements OnChanges, OnInit {
  @Input() contentType: string = '';

  styles: Style[] = [];

  constructor(private styleService: StykeServiceService) { }

  ngOnInit(): void {
    if (this.contentType) {
      this.getStylesAndTypes();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contentType'] && !changes['contentType'].isFirstChange()) {
      this.getStylesAndTypes();
      console.log('Cambio de contenido:', this.contentType);
    }
  }

  getStylesAndTypes() {
    this.styleService.getStylesAndTypes(this.contentType).subscribe(
      (res: Style[]) => {
        this.styles = res;
        console.log('Estilos y tipos:', this.styles);
      },
      error => console.error('Error al obtener los estilos:', error)
    );
  }

}
