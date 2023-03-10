//Ahora vamos a proceder a crear una clase, para luego sumarle las caracteristicas de otra.
//Primero creamos la clase PersonaNormal la cual contiene las 2 caracteristicas nombre y direccion.
class PersonaNormal {
	constructor(public nombre: string, public direccion: string) {}
}
//Creamos la segunda clase, que es igual a la anterior, salvo que le cambiamos el nombre para poder utilizarla, ya que tendriamos conflito al usarla 2 veces.
//como podemos ver tiene 3 caracteristicas.
//Tenemos la particularidad que vemos heroe2 tiene extends a personanormal, lo cual nos dice que la podemos absorver.
class Heroe2 extends PersonaNormal {
	constructor(
		public alterEgo: string,
		public edad: number,
		public nombreReal: string
	) {
		//para poder sumarle las caracteristicas de personaNormal, las llamamos de esta manera y asignamos los valores que le queremos dar a las 2 caracteristicas, en este caso, utilizamos la misma nombreReal y sumamos new york como direccion, siempre tiene que ser en el orden que las creamos.
		super(nombreReal, 'new york')
	}
}

const ironman2 = new Heroe('Ironman', 45, 'Tony Stark')

console.log(ironman2)
//El console.log nos devolvera lo siguiente Heroe{nombre: "Tony Stark", direccion: "new york", alterEgo: "Ironman", edad: 45, …} podemos ver que tiene todas las caracteristicas, tanto la de personaNormal como la de heroe2
