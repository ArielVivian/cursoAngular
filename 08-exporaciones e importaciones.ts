//En este archivo lo que vamos a hacer es comenzar a importar y exportar funciones como interfaces, en este caso la interfaz de producto y la funcion de calcularISV
//Para hacerlo tenemos que poner solamente 'export' delante de lo que queremos exportar y luego al hacer click sobre el error que nos salga, nos va a dar la opcion de importarlo. Lo hace de la siguiente manera.
import { calculaISV, Producto } from './07-desestructuracion-funcion'
//Creamos nuestro carrito de compras, donde le decimos que tiene un array de produtos, decimos cuales son sus productos y sus detalles.
const carritoCompras: Producto[] = [
	{
		desc: 'telefono 1',
		precio: 100,
	},
	{
		desc: 'telefono 2',
		precio: 150,
	},
]
//Creamos una variable con los 2 resultados que obtenemos desestructurados, para luego aplicarle nuestra funcion, donde anexamos el carrito.
const [total, isv] = calculaISV(carritoCompras)
//Obtenemos nuestros resultados.
console.log('total', total)
console.log('ISV', isv)
