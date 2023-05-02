//Procedemos a crear nuestro pipe, para el cual cambiamos una palabra de minisculas a mayusculas o viceversa.
import { Pipe, PipeTransform } from "@angular/core";

//Le damos el nombre a nuestro pipe. Va a ser la forma en que lo llamemos.
@Pipe({
    name:'mayusculas'
})
//Recordar que tenemos que agregar este pipe a los imports del modulo donde lo vayamos a utilizar. En la parte de declaraciones.
export class MayusculasPipe implements PipeTransform{
    //Utilizamos esta funcion de javaScript para la cual le damos caracteristicas a nuestro pipe, en este caso, espera recibir un string y un boleano, el cual, el string lo va a pasar a upperCase si el valor boleano recibido es true, por ende si viene con un falso, dejara al string como esta.
    transform(valor:string, enMayusculas: boolean = true):string {
        // if ( enMayusculas ){

        //     return valor.toUpperCase();
        // } else {
        //     return valor.toLocaleLowerCase()
        // }

        return (enMayusculas) ? valor.toUpperCase() : valor.toLocaleLowerCase()


    }

}