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

  heroeBorrado: string = '';
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
  borrarHeroeEjemplo() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
