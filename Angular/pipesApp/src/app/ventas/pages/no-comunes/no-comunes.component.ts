import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Ariel';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  //i18nPlural

  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Jazmin', 'Ariel'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  cambiarCliente() {
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.shift();
  }

  //KeyValue pipe

  persona = {
    nombre: 'Ariel',
    edad: 30,
    direccion: 'Villa maria, Cordoba',
  };
  //Json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
    {
      nombre: 'Spiderman',
      vuela: false,
    },
  ];
  //Async pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
