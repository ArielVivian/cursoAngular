import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  termino: string = '';
  foundError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    console.log(this.termino);
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe({
      next: (paises) => {
        console.log(paises);
        this.paises = paises;
        this.foundError = false;
      },
      error: (err) => {
        console.log('Error');
        console.info(err);
        this.foundError = true;
        this.paises = [];
      },
    });
  }
}
