# ESTRUCTURA DE UN ARREGLO:
```````javascript
[VALOR0, VALOR1,......VALORN];

se usa const por buena practica

cons vacio = [];
cons numeros = [1, 5, 8, 19];
cons nombres = ["juan", "ana", "maria"];
cons boolean = [true, false, false];
cons variado = [1, "ana", true];

```````

[W3SCHOOL.COM/ARRAYS](https://www.w3schools.com/js/js_arrays.asp "Teoría sobre arrays")

## ¿Cómo puedo acceder a una posición de un array? :

* console.log( nombres[2] );
* console.log( numeros[0] );
* console.log( variado[1] );

____
## ¿Cómo puedo acceder a una posición de un array? :
 
`for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index]);  
}`
_____

# Métodos

## PUSH
`````javascript
puedo AGREGAR un elemento al FINAL: nombres.push("eddie");
`````
## UNSHIFT
`````javascript
puedo AGREGAR un elemento al INICIO: nombres.unshift("eddie");
`````
## POPjavascript
`````
puedo QUITAR un elemento al FINAL: nombres.pop;
`````
## SHIFT
`````javascript
puedo QUITAR un elemento al INICIO: nombres.shift();
`````
## SPLICE
`````javascript
puedo QUITAR uno o varios elementos en CUALQUIER posicion: nombres.splice (1 (cual quiero eliminar?), 3 (hasta que posicion quiero eliminar?));
`````
## JOIN
`````javascript
puedo UNIR todo en un string separados por un parametro: console.log(nombres.join("," o "***" o "---"));
`````
## CONCAT
`````javascript
puedo CONCATENAR 2 arreglos en 1 solo: cons mezcla: nombres.concat (numeros);
`````
## SLICE
`````javascript
puedo hacer una COPIA de un arreglo: const copia: nombres.slice (1 (desde donde), 2 (hasta donde, pero lo que este en esta posicion no se va a copiar));
`````
## INDEXOF
`````javascript
puedo DEVOLVER una POSICION de un elemento y si no lo encuentra devuelve -1: console.log(nombres.indexOf("juan")) o console.log(nombres.indexOf("javier"));
`````
## INCLUDES
`````javascript
puedo SABER EXISTENCIA si un elemento esta o no en arreglo dando como resultado true o false: console.log(nombres.includes("jose")) o console.log(nombres.includes("juan"));
`````
## REVERSE
`````javascript
puedo INVERTIR el orden: nombres.reverse();
`````
### Más info en : [W3SCHOOL.COM/METODOS](https://www.w3schools.com/js/js_array_methods.asp "métodos de arrays")

