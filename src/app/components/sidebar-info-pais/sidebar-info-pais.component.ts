import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopulationPipe } from '../../pipes/population.pipe';
import { CommonModule } from '@angular/common';
import { LanguagesPipe } from '../../pipes/languages.pipe';

@Component({
  selector: 'app-sidebar-info-pais',
  standalone: true,
  imports: [PopulationPipe, LanguagesPipe, CommonModule],
  templateUrl: './sidebar-info-pais.component.html',
  styleUrl: './sidebar-info-pais.component.scss'
})
export class SidebarInfoPaisComponent {

  @Input() country: any
  @Output() closeEvent: EventEmitter<any> = new EventEmitter<any>();


  close() {
    this.closeEvent.emit();
  }
}
