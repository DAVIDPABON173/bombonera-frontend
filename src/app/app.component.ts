import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app-base';
  public menu: MenuItem[] = [
    { url: '/home', nombre: 'Home' },
    { url: '/alquiler', nombre: 'Alquiler' }
  ];

}
