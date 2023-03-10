//Aca lo que hacemos es crear funciones utilizando el mismo metodo de definicion que para todas las variables.
//Creamos una funcion que suma 2 parametros, los cuales van a ser numeros y a su vez, van a dar un numero como resultado. (si quisieramos que el resultado fuera un string, deberiamos hacer esto return (a + b).toString() entonces el resultado seria un string.)
function sumar(a: number, b: number): number {
	return a + b
}
const resultado = sumar(20, 40)
console.log(resultado)
//Creamos la misma funcion pero haciendo una funcionFlecha, como podemos ver, definimos de la misma manera pero utilizando una funcion flecha.
const sumarFlecha = (a: number, b: number): number => {
	return a + b
}
//Creamos otra funcion donde hacemos que se multipliquen numeros, dando 3 valores, donde uno es opcional, hay que aclarar que si hay un parametro opcional y luego otro parametro, debemos definir si o si un valor al parametro siguiente a un opcional.
function multiplicar(
	numero: number,
	otroNumero?: number,
	base: number = 2
): number {
	return numero * base
}
const resultado2 = multiplicar(5, 0, 10)
console.log(resultado2)
//Ahora lo que hacemos es crear un interface para un personaje, dandole sus 2 caracteristicas y que tipo son, sumado a que va a tener una funcion dentro.

interface PersonajeLDR {
	nombre: string
	pv: number
	mostrarHp: () => void
}
//Creamos una funcion curar, la cual le suma 20 pv a el valor que tenga el personaje, vemos que dentro dice, personaje.pv += curarX que seria el valor que curemos.
function curar(personaje: PersonajeLDR, curarX: number): void {
	personaje.pv += curarX

	console.log(personaje)
}

//Aca creamos un nuevo personaje, dandole la interface que creamos arriba, con su nombre, puntos de vida y la funcion que muestra sus puntos de vida. Notar que a la hora de llamar un parametro desde el console.log utilizamos el this.pv en este caso.
const nuevoPersonaje: PersonajeLDR = {
	nombre: 'strider',
	pv: 50,
	mostrarHp() {
		console.log('Puntos de vida:', this.pv)
	},
}
//aplicamos la funcion curar en nuestro personaje, dandole los 2 parametros, el personaje y los puntos de vida que vamos a curar.
curar(nuevoPersonaje, 20)
//llamamos la funcion que tiene dentro el personaje, para mostrar sus puntos de vida.
nuevoPersonaje.mostrarHp()
//hacemos un console log para ver al personaje.
console.log(nuevoPersonaje)
