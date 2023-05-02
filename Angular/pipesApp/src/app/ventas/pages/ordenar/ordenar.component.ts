import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {
    //Definimos la variable que utilizamos en nuestro pipe.
    enMayusculas: boolean = true;
    ordenarPor: string = '';
    heroes: Heroe[] = [
        {
            nombre: 'Superman',
            vuela: true,
            color: Color.azul
        },
        {
            nombre: 'Batman',
            vuela: false,
            color: Color.negro
        },
        {
            nombre: 'Robin',
            vuela: false,
            color: Color.verde
        },
        {
            nombre: 'Daredevil',
            vuela: false,
            color: Color.rojo
        },
        {
            nombre: 'Linterna Verde',
            vuela: true,
            color: Color.verde
        },
    ]
    
    //Creamos la funcion que cambia la variable al opuesto al que se encuentre.
    cambiar(){
        this.enMayusculas = !this.enMayusculas;
    }

    cambiarOrden(valor:string){
        this.ordenarPor = valor;
        

    }

}
