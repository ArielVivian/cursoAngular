import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  //Procedemos a llamar al constructor para poder llamar al servicio que nos va a cargar la funcion que se encarga de pushear.
  constructor(private DbzService: DbzService) {}
  //Este output nos sirve para emitir algun evento o informacion a nuestro padre, de esta forma, nosotros cargamos el nuevo personaje y cuando hacemos click en cargar, desatamos el evento y emite, para recibirlo en nuestro padre.
  //el onNuevoPersonaje es la forma en que vamos a llamar al evento en nuestro template de main page, el eventEmitter lo que que hace es decir que va a enviar y new eventemitter lo que hace es enviarlo.
  //   @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar() {
    //Validaciones.
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    if (this.nuevo.poder === 0) {
      return;
    }
    //Aca lo que hacemos es llamar al DbzService.seguido de la funcion que sea para pushear y le enviamos nuestro nuevo personaje, tan simple como eso.
    this.DbzService.agregarPersonaje(this.nuevo);
    //Aca le decimos que emita el this.nuevo, que seria el personaje a nuestro padre, donde ahi lo recibimos en el template.
    // this.onNuevoPersonaje.emit(this.nuevo);

    //Reseteo de las variables.
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
