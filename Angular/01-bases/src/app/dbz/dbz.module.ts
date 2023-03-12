//Este modulo lo creamos desde la consola, utilizando los siguientes comandos. ng(como todo lo de angular) g(generate) m(module) dbz(nombre del modulo nuevo) quedando de la siguiente manera 'ng g m "nombre del modulo"'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Para prevenir el recargado de la pagina a la hora de tocar un boton en un form, tenemos que utilizar este import. Se agrega automaticamente cuando lo llamamos desde nuestros imports.
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [MainPageComponent, PersonajesComponent, AgregarComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
  providers: [DbzService],
})
export class DbzModule {}
