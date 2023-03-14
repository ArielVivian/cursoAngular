import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
//Creamos la interfaz que va a tener nuestros personajes de dbz, con su nombre y poder, especificando el tipo de dato que van a contener.
// interface Personaje {
//   nombre: string;
//   poder: number;
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  //Creamos el array que va a contener a todos nuestros personajes.
  //   personajes: Personaje[] = [
  //     {
  //       nombre: 'Goku',
  //       poder: 15000,
  //     },
  //     {
  //       nombre: 'Vegeta',
  //       poder: 8500,
  //     },
  //   ];
  nuevo: Personaje = {
    nombre: 'pepe',
    poder: 0,
  };

  //Con esta funcion que nosotros activamos desde nuestro hijo, lo que hacemos es recibir 'argumento' que es el nombre que le damos al personaje recibio y lo pusheamos a nuestro array de personajes.
  //   agregarNuevoPersonaje(argumento: Personaje) {
  //     this.personajes.push(argumento);
  //   }
  constructor() {}

  //Creamos la funcion agregar() que se encarga primero de validar que los 2 campos tengan algun valor, para luego pushear el valor cargado a nuestro array de personajes. Por ultimo reseteamos los valores de los inputs para que no quede el nombre que nosotros cargamos.
  //   agregar() {
  //     //Validaciones.
  //     if (this.nuevo.nombre.trim().length === 0) {
  //       return;
  //     }
  //     if (this.nuevo.poder === 0) {
  //       return;
  //     }
  //     //Push del personaje.
  //     this.personajes.push(this.nuevo);
  //Creamos la variable y la guiamos por nuestra interface y llenamos los campos con datos vacios para que en los inputs conectados sean los valores predeterminados.
  //     //Reseteo de las variables.
  //     this.nuevo = {
  //       nombre: '',
  //       poder: 0,
  //     };
  //   }
}
