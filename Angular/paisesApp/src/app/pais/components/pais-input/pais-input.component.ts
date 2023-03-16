import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {
  //Importamos el output que envia una senial al padre de este componente.
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    //utilizamos este debouncer para que al buscar algo, demore 300 milisegundos la busqueda, para que no sea instantaneo entonces vaya buscando de a una letra.
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  buscar() {
    //Cuando ejecutamos el buscar local, lo que hace es emitir una senial que contiene el termino que tenemos aca guardado localmente y lo envia.
    this.onEnter.emit(this.termino);
  }
  //Aca esta la funcion que llamamos desde el input.
  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
