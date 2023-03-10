//Vamos crear un generico, lo que hace es que podamos llamar a una funcion y que nos sirva cualquier tipo de dato.
//Creamos la funcion, quetiposoy para luego ponerle la <T> que en este caso, podria ser cualquier letra, pero por convencion es la forma de decir que el tipo de dato que puede retornar el return, puede ser cualquiera o el que nosotros le asignemos mas abajo.
function queTipoSoy<T>(argumento: T) {
	return argumento
}

//Creamos una variable string la cual, al ser string, obtiene la caracteristica de lo que sea.
let soyString = queTipoSoy('hola mundo')
//Aca la funcion detecta que es un tipo numero
let soyNumero = queTipoSoy(100)
//Aca que es un array y asi podriamos seguir con todos los tipos de dato que existen.
let soyArreglo = queTipoSoy([1, 2, 3, 4, 5, 6, 8, 7])
//Por ultimo lo que hacemos es agregar un tipo de dato, al cual nosotros le decimos que tipo es, si nosotros pusieramos un string dentro, nos lo pintaria de rojo.
let soyExplicito = queTipoSoy<number>(100)
