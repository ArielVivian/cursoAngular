import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'america', 'asia', 'europa', 'oceania'];
  regionActiva: string = '';

  getClaseCSS(region: string): string {
    //como podemos ver, retornamos que si region es === a regionActiva nos devuelva unas clases y en caso contrario, otra.
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    this.regionActiva = region;
  }
}
