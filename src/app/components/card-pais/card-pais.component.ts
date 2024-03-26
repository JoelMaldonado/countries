import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-card-pais',
  standalone: true,
  imports: [],
  templateUrl: './card-pais.component.html',
  styleUrl: './card-pais.component.scss'
})
export class CardPaisComponent implements OnInit {
  @Input() pais: any;
  @Output() cartaSeleccionada: EventEmitter<any> = new EventEmitter<any>();

  img = ""

  imageService = inject(ImageService)

  loading = true;

  ngOnInit(): void {
    this.imageService.getImage(this.pais.name)
      .subscribe({
        next: (value: any) => {
          this.img = value
          this.loading = false;
        }
      })
  }

  onCartaSeleccionada(): void {
    this.cartaSeleccionada.emit(null)
    this.cartaSeleccionada.emit(this.pais);
  }

}
