import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { PopulationPipe } from '../../pipes/population.pipe';
import { CommonModule } from '@angular/common';
import { LanguagesPipe } from '../../pipes/languages.pipe';
import { ImageService } from '../../services/image.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-sidebar-info-pais',
  standalone: true,
  imports: [PopulationPipe, LanguagesPipe, CommonModule],
  templateUrl: './sidebar-info-pais.component.html',
  styleUrl: './sidebar-info-pais.component.scss'
})
export class SidebarInfoPaisComponent implements OnInit {

  @Input() selectedCountry: any
  @Output() closeEvent: EventEmitter<any> = new EventEmitter<any>();

  countryService = inject(CountryService)
  imageService = inject(ImageService)

  pais: any;
  pais2: any;
  img = ""

  close() {
    this.closeEvent.emit();
  }

  ngOnInit(): void {
    this.countryService.find(this.selectedCountry.code).valueChanges.subscribe({
      next: (data: any) => {
        this.pais = data.data.country
      }
    })
    this.countryService.getPopulation(this.selectedCountry.code).subscribe({
      next: (data: any) => {
        this.pais2 = data[0]
      }
    })
    this.imageService.getImage(this.selectedCountry.name)
      .subscribe({
        next: (value: any) => {
          this.img = value
        }
      })
  }
}
