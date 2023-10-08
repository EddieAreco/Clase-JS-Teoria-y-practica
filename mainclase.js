/*

+++++++++++++++++++++++

ARREGLOS CON OBJETOS

const productos = [
    {id : 1, nombre: "camisa", precio: 900},
    {id : 2, nombre: "media", precio: 800},
    {id : 3, nombre: "gorra", precio: 700},
    {id : 4, nombre: "remera", precio: 600},
];

for (const producto of productos){
    console.log(producto.nombre);
    console.log(producto.precio);
} //CON ESTE FOR RECORRO TODO EL ARRAY

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

console.log(productos);
*/
class Producto {
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
const productos = [];

productos.push(new Producto(1, "cerveza brahma 473", 330, 110));
productos.push(new Producto(2, "cerveza heineken 473", 560, 30));
productos.push(new Producto(3, "cerveza quilmes 473", 430, 150));
productos.push(new Producto(4, "fernet branca", 2930, 48));
/*productos.push(new Producto(5, "vodka smirnoff", 1930, 24));
productos.push(new Producto(6, "vodka smirnoff maracuya", 1930, 12));
productos.push(new Producto(7, "vodka smirnoff fr. rojos", 2060, 9));
productos.push(new Producto(8, "vodka skyy anana", 2200, 30));
productos.push(new Producto(9, "vodka skyy coco", 2000, 12));
productos.push(new Producto(10, "coca cola 2,5 lt", 990, 230));
productos.push(new Producto(11, "pepsi cola 2 lt", 730, 160));
productos.push(new Producto(12, "fanta 2 lt", 780, 110));
productos.push(new Producto(13, "pritty limon 3lt", 930, 170));*/

productos.pop();

productos.unshift(new Producto(22, "sprite 3 lt", 1000, 12));

productos.unshift(new Producto(27, "whisky blue label", 3000, 1));

productos.shift();

function compra() {
    for (let i = 0; i < 3; i++) {
        let producto = "fernet branca";
        let productoEncontrado = productos.find(item => item.nombre === producto);

        console.log(producto);

        if (productoEncontrado){

            // stockActual = productos[3];
            // precio = productos[2];

            console.log (`${productoEncontrado}`);

        } else {

            console.log("Ingresó una opción no válida.");
           // i--; // Resto 1 al contador para repetir la selección de producto.
            continue;
        }

    }
}
compra();
