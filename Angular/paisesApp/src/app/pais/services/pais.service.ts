import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
//Creamos el pais service, para poder hacer nuestra primera peticion al servidor. La cual va a ser, la de busqueda por nombre del pais.
@Injectable({
  providedIn: 'root',
})
export class PaisService {
  //Creamos una variable que contiene la api simple, sin ninguna busqueda ni nada.
  private apiUrl: string = 'https://restcountries.com/v3.1';
  //Utilizamos el constructor para llamar al httpclient a nuestros servicios.
  constructor(private http: HttpClient) {}
  //Creamos el metodo que nos va a formar nuestra url, con nuestra apiurl sumado al name que siempre es fijo, y el termino que nosotros busquemos.
  //Para darle la clase que queremos, importamos el country, de esta forma ya obtenemos el array completo y podemos acceder a todo su tipado.
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    //Por ultimo hacemos un return, con la peticion a la url.
    return this.http.get<Country[]>(url);
    //Luego nos vamos a por pais.ts a poder utilizar este metodo.
  }
}
