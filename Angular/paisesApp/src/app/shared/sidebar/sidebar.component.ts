import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  //Otra caracteristica de angular, es que podemos trabajar con el css encapsulado en un componente, aca por ejemplo le agregamos a todos los <li> que cuando estemos arriba con el mouse, se ponga el cursor en pointer.
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class SidebarComponent {}
