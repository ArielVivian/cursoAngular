//Este componente lo creamos de manera automatica desde la consola de la siguiente manera (ng g component heroes/listado)
//Esto nos crea una carpeta que contiene los 4 archivos automaticamente, donde nostros descartamos el de css y el de pruebas, el resto lo genera todo, los import, export, todo. Dejandonos todo listo para programar.
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  //Lo primero que hacemos es crear un listado de heroes, dentro de nuestra componente listado, para luego recorrerlo desde nuestro html con el comando *ngFor="let heroe of heroes; let i = index" (muy similar al v-for de vue). Esto lo montamos dentro de una li dentro de un ul, entonces el se encarga de repetir el procedimiento segun la cantidad de items que tenga ese array, en este caso 'heroe' dentro de 'heroes'.
  heroes: string[] = [
    'spiderman',
    'ironman',
    'hulk',
    'thor',
    'capitan america',
  ];
  //Creamos una variable bandera para mostrar o no la seccion de html que contiene a los heroes borrados, para de este modo si no hay ningun heroe aun, no se muestre nada. entonces si la propiedad es falsa, no se muestra, cuando nosotros activamos la funcion que borra un heroe, tambien hacemos que esta variable pase a ser true con this.isBorrado=true entonces la seccion de html pasa a ser visible.
  isBorrado: boolean = false;
  //Creamos una variable donde almacenar a nuestro heroe borrado, para ir mostrandolo en nuestro html.
  heroeBorrado: string = '';
  //Creamos un array donde almacenamos nuestros heroes borrador, para hacer otra *ngFor para ir viendolos.
  heroesBorrados: string[] = [];
  //Despues de mostrar nuestro array en una lista ordenada, lo que hacemos es crear 2 botones para ir quitando items del array, uno usando el metodo shift y el otro splice.
  //EL metodo shift lo que hace es eliminar el primer item de cada array hasta que quede vacio.
  borrarHeroeShif() {
    this.heroes.shift();
  }
  //El metodo splice lo que hace es, eliminar un items a partir de una posicion, en este caso de la posicion 2 y eliminando 1 item.
  borrarHeroe() {
    this.heroes.splice(2, 1);
  }
  //Esta tambien es una forma de aislar elemento en un array, por ejemplo de la siguiente manera.
  //Asi lo que hacemos es asignar a una variable el item que aislamos, para luego hacer con el lo que querramos, sumarlo a otro array, mostrarlo en pantalla, etc.
  //Ahora lo que hacemos es asignar el valor a una variable, y hay que tener atencion a la parte de el or al final, porque puede que nos de un error de que esta devolviendo undefined, de esta forma nos aseguramos que recibimos bien el dato.
  borrarHeroeEjemplo() {
    this.heroeBorrado = this.heroes.shift() || '';
    this.isBorrado = true;
    //En esta linea lo que hacemos es pushear el heroe borrado a un array donde los guardamos, para ir mostrandolo en nuestro html en la linea 9 con *ngFor.
    this.heroesBorrados.push(this.heroeBorrado);
  }
}
