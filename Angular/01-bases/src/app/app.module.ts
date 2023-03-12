import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Importamos el componente ContadorComponent, from './contador/contador.component';
//Luego procedemos a moverlo a una carpeta especifica de contador, como podemos ver a la izquierda, al mover el archivo dentro de una carpeta, visual studio code, nos ofrece cambiar el nombre del import automaticamente, el formato se va acercando a lo que estabamos haciendo en nuxt.
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';

@NgModule({
  //agregamos nuestro ContadorComponent dentro de declaratios y con eso lo dejamos listo para llamar al componente. al componente lo llamamos desde app.component.html
  declarations: [AppComponent, ContadorComponent, HeroeComponent, ListadoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
