//Vamos a proceder a hacer condicionamientos opcionales a la hora de hacer peticiones a nuestros objetos, en este caso, que una funcion se fije si los pasajeros tienen hijos o no.

//Creamos la interfaz del pasajero, donde contiene 2 caracteristicas, su nombre y si tiene hijos.
interface Pasajero {
	nombre: string
	//como podemos ver, hijos tiene un signo de pregunta, lo que quiere decir que ese dato puede ser opcional, osea que lo puede tener o no.
	hijos?: string[]
}
//Creamos al primer pasajero que como podemos ver, no tiene hijos, el dato ni siquiera esta enviado, no se tiene en cuenta y punto.
const pasajero1: Pasajero = {
	nombre: 'fernando',
}
//Creamos el segundo pasajero el cual tiene 2 hijos y tambien dice su nombre.
const pasajero2: Pasajero = {
	nombre: 'melissa',
	hijos: ['natalia', 'gabriel'],
}
//Llamamos a la funcion donde vamos a realizar el proceso.
//Llamamos pasajeros y que va a recibir la interfaz Pasajero.
function imprimeHijos(pasajero: Pasajero): void {
	//Creamos una variable para cuantos hijos y la igualamos al proceso que queremos realizar.
	//Como podemos ver, utilizamos el pasajeros.hijos?.length esto quiere decir, que si el pasajero en cuestion tiene el dato, siga y los cuente con el length, en caso de no tener el dato, que simplemente responda con un 0, eso lo logramos gracias a la logica del || (or) entonces seria, tiene hijos? si, entonces contalos, no tiene hijos? entonces devolve un 0
	//Esto lo hacemos porque si la funcion intenta contar algo que no tiene ningun valor, rompemos el funcionamiento, por eso utilizamos la logica.
	const cuantosHijos = pasajero.hijos?.length || 0
	//Console log donde muestra el valor de la variable de cuantos hijos tiene.
	console.log(cuantosHijos)
}
//llamamos a la funcion agregandole el pasajero.
imprimeHijos(pasajero1)
