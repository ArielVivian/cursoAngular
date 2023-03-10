//vamos a proceder a crear una funcion donde vamos a desestructurar los resultados y tomar los datos de forma mas precisa.

//Creamos la interfaz del producto en cuestion.
export interface Producto {
	desc: string
	precio: number
}
//Creamos 2 productos a los cuales le asignamos la interfaz creada.
const telefono: Producto = {
	desc: 'nokia ai',
	precio: 200,
}
const tableta: Producto = {
	desc: 'ipad',
	precio: 500,
}
//Creamos el array que contiene los 2 objetos, la tablet y el telefono.
const articulos = [telefono, tableta] as Producto[]
//Creamos una funcion para calcular los impuestos sobre ventas, donde decimos que en nuestro array producto, vamos a recorrerlo con el forEach, para obtener el precio de cada objeto.
export function calculaISV(productos: Producto[]): [number, number] {
	//iniciamos la variable total en 0
	let total = 0
	//El forEach para hacerlo desestructurado, (no tener que usar producto.precio) lo que hacemos en poner precio dentro del parentesis de la funcion flecha, para luego llamarlo al realizar la operacion.
	productos.forEach(({ precio }) => {
		total += precio
	})
	//Hacemos un return con el total 1, el cual es el resultado de la suma de todos los productos, para luego mostrar el total 2, que seria el 15% de iva que tendrian los productos, esto lo definimos desde la linea 18, donde usamos que el resultado de la funcion va a ser [number, number] de esa forma creeamos el array con los 2 resultados para luego llamarlos desestructuradamente al final.
	return [total, total * 0.15]
}
//Creamos una variable que contiene nuestros 2 resultados, para desestructurarlo, como podemos ver, llamamos al primer resultado del array, total y al segundo isv, al cual, lo igualamos a nuestra funcion calcularISV y dentro el array de articulos para aplicarla.
const [total, isv] = calculaISV(articulos)
//Como resultado obtenemos el calculo y procedemos a mostrarlo desestructuradamente gracias a la linea 31 donde esta entre corchetes [total,isv]
console.log('total: ', total)
console.log('ISV: ', isv)
