import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importamos este modulo, hacerlo manual para que funcione bien. es para la peticion a la api. Recordar agregarlo a imports.
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SharedModule, GifsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
