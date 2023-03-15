import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Para poder hacer peticiones a la web, tenemos que importar el httpclientmodule y llamarlo obviamente en nuestros imports. hay que cargarlo manual.
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

//Siempre recordar, que aca solo importamos los modulos de cada parte grande de la aplicacion, en este caso, es Pais module, y sharedModule que seria toda la app de pais y shared son todos los componentes que van a ser comunes a toda la pagina(sidebar,footer,menu).
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaisModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
