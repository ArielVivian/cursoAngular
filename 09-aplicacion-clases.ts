//Creamos una clase que contiene propiedades, las cuales, por defecto serian publicas, vale aclarar que hay 3 tipos de forma de definirlas, publicas, privadas, estaticas.
//Nosotros tenemos 2 formas de armar nuestra clase, ya sea similar a una interfaz, o como estamos viendo aca abajo, donde armamos sus caracteristicas con el constructor.
class Heroe {
	constructor(
		//Definimos las caracteristicas del heroe segun lo que necesitemos, en este caso las definimos en orden de public, 'el nobre de la variable' y el tipo de dato que contendra la variable.
		public alterEgo: string,
		public edad: number,
		public nombreReal: string
	) {}
}

//creamos nuestra nuevo heroe y como podemos ver, lo que hacemos es ir dandole las caracteristicas en orden en el que nosotros las armamos, ('Ironman', 45, 'Tony Stark') de esta forma, cuando nosotros hagamos el console.log(ironman) nos saldra lo siguiente =
//Heroe{alterEgo: "Ironman", edad: 45, nombreReal: "Tony Stark"}

const ironman = new Heroe('Ironman', 45, 'Tony Stark')

console.log(ironman)
