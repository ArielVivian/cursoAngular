import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  nombreLower: string = 'ariel';
  nombreUpper: string = 'ARIEL';
  nombreCompleto: string = 'AriEL ViViaN';

  fecha: Date = new Date();
}
