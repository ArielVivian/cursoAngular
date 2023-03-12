//A nuestro contador lo que vamos a hacer es convertirlo en un componente, primero creamos un archivo con el nombre.component.ts en este caso se llama contador.component.ts, para hacer lo siguiente dentro del mismo

//Creamos un import con el from '@angular/core'
import { Component } from '@angular/core';
//Creamos el componente con el nombre en el selector y el template contiene todo el HTML.
@Component({
  selector: 'app-contador',
  template: `
    <!-- Toolbar -->

    <!-- <h1>{{ title }}</h1> -->
    <!-- Como podemos observar, en angular los enventos los manejamos con (click (o la tecla que sea)) y hacemos una logica simple luego, no es recomendado mas que una logica simple de no mas de una linea. -->
    <!-- <button (click)="numero = numero + 1">+ 1</button>

<span>{{ numero }}</span>

<button (click)="numero = numero - 1">- 1</button>
Como podemos observar, en angular los enventos los manejamos con (click (o la tecla que sea)) y hacemos una logica simple luego, no es recomendado mas que una logica simple de no mas de una linea. -->

    <!-- <h1>{{ title }}</h1> -->
    <!-- ahora lo que hacemos es en lugar de tener 2 logicas, creamos una funcion en nuestro app.component llamada acumular, la cual espera recibir un parametro, en este caso un numero. -->
    <!-- <button (click)="acumular(-2)">- 2</button>
<button (click)="acumular(-1)">- 1</button>
<span>{{ numero }}</span>
<button (click)="acumular(+1)">+ 1</button>
<button (click)="acumular(+2)">+ 2</button> -->

    <!-- Ahora vamos a proceder a hacer un contador, pero que en lugar de utilizar numeros sueltos, utilice variables, en este caso 'base', la cual es 5 -->

    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <!-- Utilizamos la base y a la hora de enviarla como parametro, le decimos si la enviamos asi nomas o negativa, para que luego nuestra funcion interprete y nos devuelva un resultado, sumando o restando la base al acumulador que hicimos. -->
    <button (click)="acumular(+base)">+{{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
})

//Por ultimo lo que hacemos es dentro del ContadorComponent creamos toda la logica que nosotros vayamos a utilizar dentro de nuestro componente. Y luego continuamos en app.module.ts
export class ContadorComponent {
  title: string = 'Contador App'; //De aqui podemos enviar una clase a cualquier parte de estos 4 archivos, app.component.css podemos crear todo nuestro css para aplicar de manera global, desde app.component.html va nuestro html y tambien el css local que le querramos dar al archivo. desde nuestro app.component.ts es donde creamos las clases que pueden manejar nuestro html. por ultimo desde nuestro app.module.ts es uno que no deberiamos tocar.
  //Como podemos ver, parece que todas las variables que utilicemos las vamos a ir creando desde este lado.
  numero: number = 0;
  base: number = 5;
  //Creamos una funcion para poder sumar o restar directamente sin tener un funcion resta y una funcion suma, lo que hace, es esperar recibir un numero el cual nosotros llamamos 'valor' para aplicarlo a nuestra variable 'numero' notar que debemos utilizar el this.numero para poder llamar a la variable.
  //Yo hice la tarea del contador asi(punto a destacar, es que aprendi a usar ifs GOD PADRE!), era mucho mas facil como lo vamos a ver en la proxima funcion, dejo comentada esta.
  //   acumular(bandera: string) {
  //     if (bandera == '1') this.numero += this.base;

  //     if (bandera == '2') this.numero -= this.base;
  //   }
  acumular(valor: number) {
    this.numero += valor;
  }
}
