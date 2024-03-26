import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { BuscadorComponent } from '../buscador/buscador.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardPaisComponent } from '../card-pais/card-pais.component';
import { SidebarInfoPaisComponent } from '../sidebar-info-pais/sidebar-info-pais.component';

@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [RouterOutlet, BuscadorComponent, CardPaisComponent, CommonModule, SidebarInfoPaisComponent],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.scss'
})
export class PaisesComponent {
  countryService = inject(CountryService)

  countries: any[] = [];
  loading: boolean = true;
  selectedCountry: any = null;
  buscador = ""

  constructor() {
    this.countries = [];
    this.loadCountries()
  }


  handleBusqueda(buscador: string) {
    this.buscador = buscador
  }

  loadCountries() {
    this.countryService.findAll()
      .valueChanges.subscribe({
        next: (call: any) => {
          this.loading = false;
          this.countries = call.data.countries;
        },
        error: (err) => {
          console.log(err);
        }
      })
  }


  filtrarPaises(): any[] {
    return this.countries.filter(country =>
      country.name.toLowerCase().includes(this.buscador.toLowerCase())
    );
  }

  onCartaSeleccionada(carta: any) {
    this.selectedCountry = carta
  }
  
  closeDescrip() {
    this.selectedCountry = null
  }
}
