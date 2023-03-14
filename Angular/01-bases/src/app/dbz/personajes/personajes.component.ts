import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  //Esta es lo forma en que traemos la informacion a nuestro archivo de ts desde nuestro main-page, notese que importamos personaje desde interfaces, que ahora tenemos una carpeta donde estan todas ellas. a su vez, tenemos que agregar unas cosas en nuestro padre. personajes en azul, es el nombre que nosotros le damos a donde vamos a llamarlo en nuestro padre, osea que es a lo que vamos a igual a la hora de traer la informacion, esto lo realizamos en el tag desde el que llamamos a nuestro componente.

  //@Input() personajes: Personaje[] = [];
  //Lo llamamos con get personajes y lo que hacemos es un return de el array. Tambien tenemos que utilizar el constructor de abajo para poder hacerlo funcionar.
  get personajes() {
    return this.dbzService.personajes;
  }
  //Constructor necesario, sumado tambien a la importacion de el DbzService arriba.
  constructor(private dbzService: DbzService) {}
}
