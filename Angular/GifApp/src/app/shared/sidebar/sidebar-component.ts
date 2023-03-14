import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { GifsModule } from '../../gifs/gifs.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar-component.html',
})
export class SidebarComponent {
  //De esta forma es como llamamos a un array desde un servicio, sin import ni nada, el primer nombre es el que vamos a usar localmente y el return es lo que nos llena nuestro objeto historial.
  //Esto quiere decir que historial es nuestra variable local que se llena con el this.gifsService.historial que esta en el service.
  get historial() {
    return this.gifsService.historial;
  }

  //El constructor es fundamental, ya que de aca es de donde llamamos al parametro/objeto/array, lo que sea.
  constructor(private gifsService: GifsService) {}

  //Creamos esta funcion para poder llamar a los gifs desde nuestro historial, haciendole click encima, lo que hace es que igual nuestra variable local termino a la variable query que tenemos en services.
  buscar(termino: string) {
    this.gifsService.buscarGifs(termino);
  }
}
