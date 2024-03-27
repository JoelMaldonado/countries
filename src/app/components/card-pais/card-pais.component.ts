import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { CountryService } from '../../services/country.service';
import { firstValueFrom, forkJoin } from 'rxjs';

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
  countryService = inject(CountryService)

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

  async onCartaSeleccionada() {
    const country: any = await firstValueFrom(this.countryService.find(this.pais.code).valueChanges)
    const image: any = await firstValueFrom(this.imageService.getImage(this.pais.name))
    const population: any = await firstValueFrom(this.countryService.getPopulation(this.pais.code))
    

    

    const data = {
      name: country.data.country.name,
      code: country.data.country.code,
      img: image,
      continent: country.data.country.continent.name,
      capital: country.data.country.capital,
      languages: country.data.country.languages,
      currency: country.data.country.currency,
      population: population[0].population,
      states: country.data.country.states
    }

    console.log(data);

    this.cartaSeleccionada.emit(data);
  }

}
