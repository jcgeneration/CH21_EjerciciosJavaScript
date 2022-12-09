/*
 * jc - Ejercicio #1
 * Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6]
 * 2022/12/09
 * */
let arreglo =  [3, 5, 7, 1, 6];
//let arreglo = [250, 20, 21, 150, 512, 1024, 321, -1, -547]; // Otro arreglo de prueba

// Escribe el contenido completo del arreglo
console.log(arreglo);
// Asigna el primer elemento como el mayor
let numMayor=arreglo[0];
for (let index=0; index<arreglo.length; index++){
	if (arreglo[index]>numMayor){
		//Si el elemento del arreglo es mayor lo asigna a la variable
		numMayor = arreglo[index];
	}//if
}//for index
console.log("El número mayor es: ", numMayor);

