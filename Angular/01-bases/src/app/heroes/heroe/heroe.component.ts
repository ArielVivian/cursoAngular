//Procedemos a crear un nuevo componente llamado heroe.component.ts el cual tiene su html que se llama de la misma forma.
//Como podemos ver, importamos component desde angular core y luego hacemos el @component con su nombre que seria el selector y donde se encuentra el html dentro del 'templateUrl' a su vez exportamos la clase HeroeComponent.
//Importamos
import { Component } from '@angular/core';
//Creamos su nombre y donde esta el html.
@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
//Exportamos la clase.
export class HeroeComponent {
  //Creamos nuestro heroe con 2 caracteristicas, nombre y edad (para mi era mejor crear un objeto, pero lo hara mas adelante.)
  nombre: string = 'Iron Man';
  edad: number = 45;
  //Hacemos un get para realizar una funcion de javascript que lo que hace es pasar a letra capital el string que nosotros tengamos.  linea 13 de nuestro html vemos como llamamos al nombre, crea una variable llamada nombreCapitalizado, le podemos poner cualquier nombre.
  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }
  //Realizamos una funcion donde concatenamos una oracion que tiene el nombre del heroe y su edad, entonces desde el html (linea 11) llamamos la funcion y nos devuelve la informacion.
  ObtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }
  //Ahora con esta funcion lo que vamos a hacer es que cambie el nombre del heroe, no porque sea aprender algo super importante si no para ver como se ejecuta todo de nuevo cuando nosotros hacemos click en el bton de nuestro html que tiene el click que desencadena esta funcion. (linea 16 html)
  //Estoy cambios tambien son buenos para ver el onewaydatabinding, el cual lo que hace, es que al cambiar por primera vez las variables y actualizar el html, si nosotros hacemos click de nuevo, la funcion se ejecuta, pero no refresca el html no se sobreescribe otra vez con lo mismo, si no que nota que ya tiene esos valores, si nosotros hicieramos un consle.log dentro, se ejecutaria con cada click pero el html ignoraria cualquier cambio que no sea necesario.
  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }
  //Procedemos a hacer una funcion nueva que haga lo mismo con la edad. llamandola en nuestro html en la linea 17
  cambiarEdad(): void {
    this.edad = 20;
  }
}

//Para ir sabiendo como ordenar las cosas, podemos ver a la derecha, como creamos una carpeta llamada heroes, que dentro contiene un heroe particular, donde creamos nuestros archivos, tanto el de html como el de tipeScript, siempre es recomendable manejarse de esa manera si dentro de una carpeta hay mas de 1 archivo suelto, lo metemos dentro de una carpeta con el nombre del componente.
