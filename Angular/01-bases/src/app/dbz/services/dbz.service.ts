//Ahora lo que nos proponemos hacer con el dbz.service.ts es una hoja, donde nosotros podemos almacenar cosas, en este caso vamos a guardar los personajes que nosotros tenemos de base.

//importamos la funcion de angular injectable.
import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
//Llamamos el decorador.
@Injectable()
//Creamos la clase DbzService donde nosotros vamos a tener nuestros personjes, tener en cuenta que estamos importando nuestra interface de personaje.
//notese que agregamos la propiedad 'private' que hace que esta clase no sea modificable.
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 8500,
    },
  ];
  //Con este get lo que hacemos es enviar los personajes que tenemos a cualquier lado donde se los llame. Tener en cuenta que usamos esto porque la clase que creamos esta puesta en privado, por ende, con la funcion get le decimos que la envie. para eso son los ...(3 puntos) que estan ahi.
  //Ahora vamos a llamar a nuestro array desde personajes.
  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {}
  //Ahora vamos a proceder a agregar personajes a nuestro array, por eso mismo, creamos este proceso dentro de nuestro service, como podemos ver, es un push comun y corriente, donde le damos un nombre, que vamos pushear y lo hacemos. Seguimos en personajes.
  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
