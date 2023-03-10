//Aca vamos a proceder a desestructurar objetos cuando los llamemos, para no tener que utilizar por ejemplo, reproductor.detalles.autor, para llamar al autor y poder mostrarlo.

//Primero definimos la primer interface que contiene sus parametros y otra interface anidada donde estan los detalles de la cancion.
interface Reproductor {
	volumen: number
	segundo: number
	cancion: string
	detalles: Detalles
}
//Creamos la interfaz que se va a anidar dentro de reproductor.
interface Detalles {
	autor: string
	año: number
}
//Asignamos todos los valores a reproductor incluyendo los detalles.
const reproductor: Reproductor = {
	volumen: 90,
	segundo: 36,
	cancion: 'mess',
	detalles: {
		autor: 'ed sheeran',
		año: 2015,
	},
}
//De esta forma lo que hacemos, es desestructurar los parametros dentro de reprocutor, entonces como vemos mas abajo, llamamos directamente cada caracteristica sin utilizar .algo
const { volumen, segundo, cancion, detalles } = reproductor
//Como podemos ver para desestructurar un objeto anidado, tenemos que repetir el proceso de asignar otra variable que extraiga autor de detalles.
const { autor } = detalles
//Hacemos console log, donde antes teniamos que poner reproductor.volumen, etc y reproductor.detalles.autor para poder llamar la informacion, pero a travez de la desesctructuracion que aplicamos, solo necesitamos su nombre.
console.log('El volumen actual es de: ', volumen)
console.log('El segundo actual es de: ', segundo)
console.log('la cacion actual es de: ', cancion)
console.log('El autor es: ', autor)
