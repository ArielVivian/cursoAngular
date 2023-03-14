import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
//Esto se enlaza directamente con todo los componentes que tengamos en gifs, procedemos a crear la clase y hacer que podamos recibir los datos.
export class GifsService {
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = '97u8iP8H8AUk72J6Oaf5ycfaFkmsik6G';
  //Definimos el array donde vamos a almacenar las busquedas.
  private _historial: string[] = [];
  //Hacemos un get que nos devuelva el historial/
  get historial() {
    //De esta forma prevenimos que se muestren mas de 10 resultados en el array,  es efectivo pero se consume bastantes recursos. A continuacion vemos una mejor forma.
    //this._historial = this._historial.splice(0, 10);
    //https://quicktype.io/
    return [...this._historial];
  }
  //todo cambiar any por su tipo correspondiente.
  public resultados: Gif[] = [];
  //Con este constructor hacemos la peticion a la pagina web.
  constructor(private http: HttpClient) {
    //Con este if lo que hacemos es comprobar de que en el storage de la pagina haya algo y si lo  hay que nos lo traiga, pero para que podamos usarlo, tenemos que utilizar el json.parse que hace el proceso inverso a convertir a string, en este caso lo vuelve a normal, entonces nosotros lo recibimos y pegamos en nuestro this._historial.
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
    if (localStorage.getItem('gifs')) {
      this.resultados = JSON.parse(localStorage.getItem('gifs')!);
    }
  }
  //Creamos la funcion que nos permite ir almacenando las busquedas realizadas, como queremos que se vaya cargando de 1 y siempre se ponga en la primer posicion la busqueda mas nueva, usamos el unshift que es un propiedad de javascript, como podemos ver, le decimos, unshift query que seria el valor.
  buscarGifs(query: string = '') {
    //esta linea de codigo, lo que hace es que convierte las letras a minusculas siempre y tambien tiene en cuenta de no tomar los espacios vacios delante y detras.
    query = query.trim().toLocaleLowerCase();
    //Con este if, lo que hacemos es evitar que se guarden los mismos valores en nuestro historial, como podemos ver primero chequea que no este con el includes para luego ejecutar el codigo de no pasar de 10, para luego almacenarlo.
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      //Si utilizamos la linea de codigo, aca abajo, se ejecuta solamente cuando utilizamos buscar gifs
      this._historial = this._historial.splice(0, 10);
      //con estas lineas de codigo lo que hacemos, es que la pagina nos almacene nuestro historial, utilizando puro javaScript, este local storage lo que hace es almacena solo strings, por eso usamos JSONstringify que convierte todo un archivo a string. de esa forma lo recibe. luego absorvemos la informacion desde el localStorage con nuestro constructor.
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    //de esta forma hacemos un pedido a la web, de momento vamos a usar otra, pero esta bueno tenerla aca guardado por cualquie cosa.
    // fetch(
    //   'https://api.giphy.com/v1/gifs/trending?api_key=97u8iP8H8AUk72J6Oaf5ycfaFkmsik6G&=dragon ball&=10'
    // ).then((resp) => {
    //   resp.json().then((data) => {
    //     console.log(data);
    //   });
    // });
    //Otra manera de hacer peticiones a un servidor.
    // const resp = await fetch(
    //   'https://api.giphy.com/v1/gifs/trending?api_key=97u8iP8H8AUk72J6Oaf5ycfaFkmsik6G&'
    // );
    // const data = await resp.json();
    // console.log(data);
    //Esta es la forma en que vamos a hacer las peticiones desde angular en este proyecto, para eso hicimos unos cambios en app.module.ts, importamos unos modulos y tambien agregamos un constructor mas arriba.

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('gifs', JSON.stringify(this.resultados));
      });
  }
}
