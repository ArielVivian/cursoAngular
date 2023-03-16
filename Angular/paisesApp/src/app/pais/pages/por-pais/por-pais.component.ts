import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
//importamos la pagina de servicio donde tenemos el metodo.

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  foundError: boolean = false;
  paises: Country[] = [];
  //utilizamos el constructor para crear nuestro paisService.
  constructor(private paisService: PaisService) {}
  //Creamos nuestro metodo que le envia el termino a nuestro servicio, para que podamos hacer funcional la pagina. resp seria la respuesta que nos devolvera la web que estemos llamando.
  buscar(termino: string) {
    //Aca recibimos el termino que nos esta enviando nuestro hijo, como podemos ver, dentro de los parentesis de buscar, esta el termino recibido, que es un string, aca abajo lo que hacemos es igualarlo a el termino nuestro local, para realizar la busqueda.
    console.log(this.termino);
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        console.log(paises);
        this.paises = paises;
        this.foundError = false;
      },
      error: (err) => {
        console.log('Error');
        console.info(err);
        this.foundError = true;
        this.paises = [];
      },
    });
  }
  //una vez obtenida la informacion de los paises o pais de nuestra busqueda, lo que hacemos es copiar la peticion desde postman, para luego pegarla en el instantly parse el cual se encarga de extraer la clase, creamos la nueva interfaz y ya tenemos todo el tipado correspondiente a nuestro pais o paises obtenidos.
  sugerencias(termino: string) {
    this.foundError = false;
    //todo Crear sugerencias
  }
}
