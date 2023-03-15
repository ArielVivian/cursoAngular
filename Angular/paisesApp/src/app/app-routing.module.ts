//Vamos a proceder a crear nuestra primera pagina de routes, es para ir moviendonos por la pagina, y lo que se va a ir mostrando arriba. en la barra de navegacion.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
//Creamos una variable con la caracteristica y nombres routes. procedemos a escribir todos nuestros paths.
const routes: Routes = [
  {
    //Siempre se pone primero la pagina principal.
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  {
    //Siempre se pone ultimo si la pagina esta mal escrita o algo en particular, cabe aclarar que se suele llamar aca a un componente de error.
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  //Aca importamos nuestro modulo y agregamos el tag de forRoot con el nombre de nuestra variable.
  imports: [RouterModule.forRoot(routes)],
  //Exportamos el routermodule.
  exports: [RouterModule],
})
//Exportamos la clase tambien.
export class AppRoutingModule {}
//Por ultimo, procedemos a importar este modulo en nuestro app.module.ts
