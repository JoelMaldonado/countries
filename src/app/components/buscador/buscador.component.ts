import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss'
})
export class BuscadorComponent {
  buscador = ""

  isVisible = false
  @Output() busquedaRealizada: EventEmitter<string> = new EventEmitter<string>();

  continentes = [
    {
      label: 'Europa',
      img: '../../../assets/europa.webp',
      select: false
    },
    {
      label: 'America',
      img: '../../../assets/america.webp',
      select: false
    },
    {
      label: 'Asia',
      img: '../../../assets/asia.webp',
      select: false
    },
    {
      label: 'Oceanía',
      img: '../../../assets/oceania.jpg',
      select: false
    },
    {
      label: 'Africa',
      img: '../../../assets/africa.jpg',
      select: false
    }
  ]

  enviarBusqueda() {
    this.busquedaRealizada.emit(this.buscador);
  }

  limpiar() {
    this.buscador = ""
    this.continentes.forEach(cont => cont.select = false);
  }
}
