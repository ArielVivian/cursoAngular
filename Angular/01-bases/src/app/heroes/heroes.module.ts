//Lo que hacemos en este nuevo modulo creado, es modularizar una seccion del codigo, en este caso la parte 'Heroes', definiendo que sus componentes son HeroeComponent y ListadoComponent.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  //Lo declaramos aqui dentro a los Componentes que integran este modulo.
  declarations: [HeroeComponent, ListadoComponent],
  //Aqui declaramos los que vamos a exportar, osea los que queremos mostrar.
  exports: [ListadoComponent],
  //Importamos esta funcion de angular para hacerlo funcional.
  imports: [CommonModule],
})
export class HeroesModule {}
