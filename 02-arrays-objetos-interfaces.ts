//Definimos un array
let habilidades: string[] = ['Bash', 'Counter', 'Healing']

//definimos interface a el formato que va a tomar nuestro objeto y cada caracteristica que tenga dentro.

interface Personaje {
	nombre: string
	hp: number
	habilidades: string[]
	puebloNatal?: string
}

//definimos nuestro objeto, dandole sus caracteristicas y asignandole la interface que creamos con su mismo nombre, entonces sabe que tipo es cada caracteristica que englobe.

const personaje: Personaje = {
	nombre: 'straider',
	hp: 100,
	habilidades: ['bash', 'counter', 'healing'],
}

//Aca lo que hacemos es sumar una caracteristica a nuestro objeto, definiendolo, el cual no estaba de un comienzo, entonces en nuestra interface lo que hacemos es que sea opcional con el signo de pregunta y decimo que tipo de dato es.

personaje.puebloNatal = 'Pueblo Paleta'

console.table(personaje)
