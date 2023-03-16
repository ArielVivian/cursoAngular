import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
//ahora vamos a proceder a hacer la conexion de nuestro url a la pagina, para que al nostros tocar ver.... en nuestra tabla, conectemos toda la informacion de ese pais a el url que corresponde.
export class VerPaisComponent {
  constructor(
    //Creamos el activated route
    private activatedRoute: ActivatedRoute,
    //Importamos la funcion que vamos a utilizar mas abajo y que se puede ver en services.
    private paisService: PaisService
  ) {}
  pais!: Country[];
  //Creamos esta funcion de angular, que lo que hace nos suscribe al id de la pagina, para luego llamar a nuestra funcion en paisService, donde nosotros nos encargamos de montar la url correspondiente a ese pais.
  ngOnInit(): void {
    //     this.activatedRoute.params.subscribe(({ id }) => {
    //       console.log(id);
    //       this.paisService.getPaisPorAlpha(id).subscribe((pais) => {
    //         this.pais = pais[0];
    //         console.log(pais);
    //       });
    //     });
    //   }
    //ahora vamos crear otra forma de obtener el pais individualmente utilizando un rxjs
    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.paisService.getPaisPorAlpha(param['id'])),
        tap(console.log)
      )
      .subscribe((pais) => (this.pais = pais[0]));
  }
}
