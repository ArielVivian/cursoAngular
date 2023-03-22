// Para no tener que hacer todas las importaciones en cada parte de nuestra aplicacion, lo que hacemos es crearnos un nuevo modulo, donde las vamos a ubicar a todas, para luego, desde nuestro app.module.ts importamos este modulo, de esa forma, tenemos todos los componentes disponibles aqui. Una buena practica es organizar los componentes aqui agregados en forma alfabetica.

import { NgModule } from '@angular/core';

import { Button, ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [ButtonModule, CardModule, MenubarModule],
})
export class PrimeNgModule {}
