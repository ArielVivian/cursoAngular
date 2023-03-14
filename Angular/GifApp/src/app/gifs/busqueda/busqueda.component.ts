import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

//Notamos que ya tenemos el pagina desarrollada, o al menos armado el html, ahora nos toca la aprte del typescript, procemos a crear una variable dentro de services, que es donde vamos a almacenar las busquedas. comando para crear service (ng g s (carpeta donde lo ponemos)/nombre del service.)

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
  //Con el ViewChild lo que haces es enlazar alguna parte de nuestro html a un tipo de dato que tenemos. Nos sirve para limpiar un campo cualquiera o para obtener alguna informacion. lo naranja, es lo que figura en el html, luego le especificamos que ese texto va a estar si o si con el ! para luego especificar que es de tipo elementref html input element.
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  constructor(private GifsService: GifsService) {}
  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.GifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
