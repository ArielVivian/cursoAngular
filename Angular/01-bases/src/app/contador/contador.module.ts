//Procedemos a crear otro modulo para practicar, voy a comentar paso a paso.
//Creamos la hoja contador.module.ts (donde estamos ahora.)
//Importamos el NgModule desde angular.
import { NgModule } from '@angular/core';
//Importamos el componente que nosotros vamos a utilizar. Pueden ser varios, segun la dimension de nuestra vista.
import { ContadorComponent } from './contador/contador.component';
//Creamos el decorador que importamos.
@NgModule({
  //Declaramos que componentes integran este modulo
  declarations: [ContadorComponent],
  //Declaramos los componentes que queremos que sean publicos.
  exports: [ContadorComponent],
})
//Exportamos la clase ContadorModule, que seria todo lo que creamos aca arriba. Con esto ya estamos listos para ir a app.module.ts (donde nosotros usamos nuestros componentes para mostrarlos en la pagina. Ahi simplemente en imports, importamos este modulo 'ContadorModule' con eso ya estaria listo.)
export class ContadorModule {}
