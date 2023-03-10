//Para poder crear una interface que tenga un objeto dentro, lo correcto es crear otra interface, donde pongamos los parametros que tiene ese objeto, no definir un objeto dentro de otro, haciendolo de la siguiente manera.
//Aca creamos la interfaz que va a utilizar el objeto dentro.
interface Direccion {
	calle: string
	pais: string
	ciudad: string
	mostrarDireccion: () => string
}
//Creamos la interfaz principal donde anidamos la otra interfaz, es buena practica que tengan nombres similares a la interfaz.
interface SuperHeroe {
	nombre: string
	edad: number
	direccion: Direccion
}
//Creamos la variable con todos los datos, y creamos el objeto con todos los parametros que tenemos en la interface. Para luego crear la funcion que tambien tenemos en nuestra interface, donde va a devolver un string que devuelve informacion que nostros cargamos.
const superHeroe = {
	nombre: 'spiderman',
	edad: 30,
	direccion: {
		calle: 'Main st',
		pais: 'usa',
		ciudad: 'ny',
	},
	mostrarDireccion() {
		return (
			this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais
		)
	},
}
//Procedemos a asignar a una variable nuestros parametros llamando a la funcion mostrarDireccion, para luego hacer un console.log donde vemos lo que nos devuelve nuestra funcion.
const direccion = superHeroe.mostrarDireccion()
console.log(direccion)
