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
____
## ¿Cómo puedo acceder a una posición de un array? :

* console.log( nombres[2] );
* console.log( numeros[0] );
* console.log( variado[1] );

____
## ¿Cómo puedo acceder a una posición de un array? :

````javascript
for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index]);  
}
````
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
## POP
`````javascript
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
---
## `Si quisiera eliminar por nombre como puedo hacer?`

### tengo que recurrir a una funcion:
```javascript
const productos = [ "camisa", "gorra", "saco", "remera"];

const eliminarPorNombre = (nombre) =>{
    //COMO NO SE LA POSICION EXACTA DONDE VA A ESTAR ESE PARAMETRO (EN ESTE CASO EL NOMBRE) DENTRO DEL ARRAY, HAGO UNA VARIABLE INDEX
    let index = productos.indexOf(nombre);

    if (indexOf != -1){ //CON ESTA CONDICION LE ESTAMOS DICIENDO QUE SI ES -1 (QUE ES EL RESULTADO QUE INDEXOF ARROJA CUANDO NO ENCUENTRA UN VALOR QUE ESTE CASO SERIA EL NOMBRE DEL PRODUCTO QUE INGRESEMOS)
        productos.splice( index, 1); //INDEX SIGNIFICA QUE NOS PARAMOS EN LA POSICION DEL ARRAY DONDE ENCONTRO EL NOMBRE Y AL PONER 1, SOLAMENTE VA A BORRAR ESE NOMBRE
    }
}
```
### `Los arrays también pueden tener dentro a objetos:`

```javascript
const productos = [
    {id : 1, nombre: "camisa", precio: 900},
    {id : 2, nombre: "media", precio: 800},
    {id : 3, nombre: "gorra", precio: 700},
    {id : 4, nombre: "remera", precio: 600},
];
```
`Cómo puedo acceder a los objetos dentro del array?:`

````javascript
hago un iterador con un for of:
for (const producto of productos){ //LE ESTOY INDICANDO QUE ACCEDA A LA CONSTANTE LLAMADA "PRODUCTO" Y DENTRO DE ESTE, QUE VAYA A LOS "PRODUCTOS"
    console.log(producto);
    console.log(producto.nombre); //QUIERO ACCEDER A LOS NOMBRES
    console.log(producto.id); //QUIERO ACCEDER A LOS ID
}
````

`También podemos crear esos objetos a través de una Clase:`

````javascript
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [];

productos.push(new Producto("camisa", 1214));
productos.push(new Producto("media", 1284));
productos.push(new Producto("gorra", 1219));
productos.push(new Producto("camisa", 4214));
````

# PARTE 2

* `COMPRENDER QUE ES UNA FUNCION DE ORDEN SUPERIOR`
* `DOMINAR LOS METODOS AVANZADOS DE ARRAYS`

**funcion de orden superior** es una función que bien retorna una función o recibe por parametro una función

___
ejemplo de una función que retorna otra función:
````javascript
function mayorQue(n){
    return (m) => m > n;
}

let mayorQueCinco = mayorQue(5);

EN ESTE CASO, 5 VA A TOMAR EL VALOR DE "n" Y "mayorQue" VA A TOMAR EL VALOR DE LA FUNCION QUE SERIA EL return

console.log(mayorQueCinco(6));

AHORA EL NUMERO INGRESADO ENTRE PARENTESIS VA A PASAR A OCUPAR EL LUGAR DE return Y ME VA A QUEDAR UNA COMPARACION DE 6 > 5, QUE EN ESTE CASO NOS VA A DAR "true"

function operacionesBasicas(operacion){
    if (operacion === "sumar"){
        return (a,b) => a + b;
    }
    if (operacion === "restar"){
        return (a,b) => a - b;
    }
    if (operacion === "multiplicar"){
        return (a,b) => a * b;
    }
    if (operacion === "dividir"){
        return (a,b) => a / b;
    }
}

let suma = operacionesBasicas("sumar");
let resta = operacionesBasicas("restar");
let multiplicacion = operacionesBasicas("multiplicar");
let division = operacionesBasicas("dividir");

console.log(suma(10,15));
console.log(division(12,3));
````
___
ejemplo de una función que recibe como parámetro otra función:

````javascript

function iterador (array, function){
    for (const numero of array){
        funcion(numero);
    }
}

iterador ([3,4,5,6,7], console.log);

LO QUE SUCEDE ACA ES QUE "array" VA A SER EL PRIMER PARAMETRO Y "console.log" QUE ES UN AFUNCION, VA A SER EL 2DO PARAMETRO, EL RESULTADO FINAL VA A SER QUE ME VA A MOSTRAR LOS NUMEROS POR CONSOLA

function sumar (numero){
    console.log(numero + 1);
}

function iterador (array, function){
    for (const numero of array){
        funcion(numero);
    }
}

sumar ([6,8,11,55], sumar);

EN ESTE ULTIMO EJEMPLO, EL RESULTADO FINAL ES QUE A CADA NUMERO DEL ARRAY LE VA A SUMAR 1 YA QUE EN LA FUNCION SUMAR LE DIJIMOS QUE EL NUMERO QUE LE APAREZCA AHI, LE SUME 1

````
----
# METODOS DE BUSQUEDA Y TRANSFORMACION
----

# FOR EACH

````javascript
Recorre el arreglo:

const productos = [
    {id : 1, nombre: "camisa", precio: 900},
    {id : 2, nombre: "media", precio: 800},
    {id : 3, nombre: "gorra", precio: 700},
    {id : 4, nombre: "remera", precio: 600},
];

productos.forEach(item => {
    console.log(item);
    console.log(item.nombre);
    console.log(item.precio);
});

LA ORDEN QUE RECIBE ES QUE EN CADA ITERACION ME MUESTRE UN ITEM, QUE VA A TOMAR EL PROGRAMA COMO ITEM?, VA A TOMAR CADA OBJETO QUE TENEMOS DENTRO DEL ARRAY, A LO CUAL NOS VA A MOSTRAR EN CONSOLA, TAMBIEN PODEMOS PEDIRLE ALGO MAS PRECISO COMO EL NOMBRE O EL PRECIO
````

# FIND

````javascript
Permite encontrar el primer elemento del arreglo que cumpla la condicion dada, pero una vez que lo hace, no sigue verificando el resto de los elementos

let productoEncontrado = productos.find(item => item.nombre === "camisa");

console.log (productoEncontrado);
________________________________________________________________________

Cómo aplicarlo a un caso práctico?:

let nombre = prompt ("Ingrese el nombre del producto para ver su descripción");

let encontrado = productos.find((item) => item.nombre === nombre);

if (encontrado){ //SI ENCONTRADO ES TRUE...
    alerta(`
    id: ${encontrado.id}
    nombre: ${encontrado.nombre}
    $${encontrado.precio}
    `)
}else{
    alert("Producto no encontrado");
}
````

# FILTER

````javascript
Me permite buscar o filtar los elementos que cumplan la condición dada:

let precio = Number(prompt("Ingrese el precio mínimo"));
let filtrados = productos.filter(item => item.precio > precio);
console.log(filtrados);

filtrados.forEach((item) => {
    alert(`
    id: ${item.id};
    nombre: ${item.nombre};
    precio: ${item.precio};
    `)
}) //HICIMOS UNA ITERACION PARA HACER UN RECORRIDO Y PARA QUE ME ARROJE TODA LA INFORMACION DE AQUELLOS PRODUCTO QUE CUMPLAN CON LA CONDICION DEL FILTER
````

# SOME

````javascript
Verifica si al menos 1 de los elementos cumple la condición:

console.log(productos.some(item => item.nombre === "media")); //TRUE
console.log(productos.some(item => item.nombre === "gdasfsd")); //FALSE

````

# MAP

````javascript
Modifica o transforma los elementos del arreglo:

const precios = productos.map((item) => item.precio);
console.log(precios);

const nombres = productos.map((item) => item.nombre);
console.log(nombres);

const descuento = productos.map(item => {
    return{
        id: item.id,
        nombre: item.nombre,
        precio: item.precio - (item.precio * 0.21);
    }
})

console.log(descuentos); //LO QUE ME VA A ARROJAR POR PANTALLA ES EL LISTADO DE TODOS LOS PRODUCTOS CON SUS RESPECTIVOS ID, NOMBRES Y CON EL DETALLE DE QUE A TODOS LOS PRECIOS LES VA A DESCONTAR UN 21%
````

# REDUCE

````javascript
Reduce el array a un único valor, el reduce recibe 2 parámetros, un around function y un valor:

const numeros = [4, 5 ,1, 11];

let total = numeros.reduce ((acum, item) => acum + item, 0);
//EL "item" ES EL QUE VA A PASAR POR CADA UNO DE LOS ELEMENTOS, EL "acum" (ACUMULADOR) ES QUE EL VA A GUARDAR CADA UNO DE ESOS ELEMENTOS Y EL 0 LO PONEMOS PARA QUE ESE SEA EL PUNTO DE PARTIDA DE "acum"

ESTO PUEDE SERVIR PARA LA COMPRA TOTAL DE UN CARRITO DE COMPRAS O PARA OBTENER UN PROMEDIO DE LOS PRECIOS, O DE CUANTOS USUARIOS HAY, ETC

let total = productos.reduce ((acum, item) => acum, item.precio, 0);
````

# SORT

````JAVASCRIPT
Sort ordena el arreglo:

const numeros = [6, 99, 12, 55];

console.log (numeros.sort((a,b) => a - b));
//ORDENA DE MENOR A MAYOR PORQUE LOS PARAMETROS A,B ESTAN EN EL MISMO SENTIDO
console.log (numeros.sort((a,b) => b - a));
//ORDENA DE MAYOR A MENOR PORQUE LOS PARAMETROS A,B ESTAN EN SENTIDO CONTRARIO

Ej para ordenar en base a una propiedad:

console.log(
    productos.sort((a,b) => {
        if (a.name > b.name){
            return 1;
        } //ME VA A ORDENAR LOS PRODUCTOS DE LA A - Z EN BASE AL NOMBRE
        if (a.name < b.name){
            return -1;
        }//ME VA A ORDENAR LOS PRODUCTOS DE LA Z - A EN BASE AL NOMBRE
    })
)
````



