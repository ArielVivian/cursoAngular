import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
// import { VentasModule } from './ventas/ventas.module';
// import { MenuComponent } from './shared/menu/menu.component';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Cambiar el locale de la app, seria pasar nuestra app al idioma local nuestro, en este caso español.
import '@angular/common/locales/global/es';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es-AR';

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
  ],
  //Agregamos esto al providers y ya tenemos todo nuestro html pasado a espaniol.
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
