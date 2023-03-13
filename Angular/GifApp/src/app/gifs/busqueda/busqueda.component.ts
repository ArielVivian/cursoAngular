import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  //Con el ViewChild lo que haces es enlazar alguna parte de nuestro html a un tipo de dato que tenemos. Nos sirve para limpiar un campo cualquiera o para obtener alguna informacion. lo naranja, es lo que figura en el html, luego le especificamos que ese texto va a estar si o si con el ! para luego especificar que es de tipo elementref html input element.
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
