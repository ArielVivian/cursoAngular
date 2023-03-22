import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'ArIEl ViViaN';
  valor: number = 1000;
  obj = {
    nombre: 'Ariel Vivian',
  };

  mostrarNombre() {
    console.log(this.nombre);
  }
}
