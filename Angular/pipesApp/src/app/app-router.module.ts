import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
//En este modulo, lo que hacemos es crear todas las rutas correspondientes a nuestra pagina, como podemos ver, las rutas cuentan con 3 partes en caso de ser la principal y con solo 2 en caso de ser las secundarias, una que es el string que va a ir en el navegador y la otra el componente que enlaza. Para terminar de utilizarlas, las llamamos de nuestra barra de tareas, con un <routerlink y el string que corresponda>.

const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full',
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent,
  },
  {
    path: 'ordenar',
    component: OrdenarComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
