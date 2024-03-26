import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {
  tab : any
  router = inject(Router)

  items = [
    {
      label: 'Home',
      route: 'home'
    },
    {
      label: 'Vista 1',
      route: 'vista1'
    },
    {
      label: 'Vista 2',
      route: 'vista2'
    }
  ]

  select(value: any) {
    this.tab = value;
    this.router.navigateByUrl(value.route)
  }
}
