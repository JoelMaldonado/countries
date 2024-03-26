import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DrawerComponent } from './components/drawer/drawer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, MatIconModule, DrawerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  url = 'usuarios'
  data = [
    {
      label: 'Usuarios',
      url: 'home'
    },
    {
      label: 'Distritos',
      url: 'vista1'
    },
    {
      label: 'Metodo de Pago',
      url: 'vista2'
    }
  ]

  private router = inject(Router)

  navegar(url: string) {
    const d = [`${url}`]
    this.url = url;
    this.router.navigate(d)
  }

  onToggleMenu(e: any) {
    const navLinks: any = document.querySelector('.nav-links')
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-[9%]')
  }
}
