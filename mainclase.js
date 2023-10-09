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
productos.push(new Producto(5, "vodka smirnoff", 1930, 24));
productos.push(new Producto(6, "vodka smirnoff maracuya", 1930, 12));
productos.push(new Producto(7, "vodka smirnoff fr. rojos", 2060, 9));
productos.push(new Producto(8, "vodka skyy anana", 2200, 30));
productos.push(new Producto(9, "vodka skyy coco", 2000, 12));
productos.push(new Producto(10, "coca cola 2,5 lt", 990, 230));
productos.push(new Producto(11, "pepsi cola 2 lt", 730, 160));
productos.push(new Producto(12, "fanta 2 lt", 780, 110));
productos.push(new Producto(13, "pritty limon 3lt", 930, 170));

productos.unshift(new Producto(22, "sprite 3 lt", 1000, 12));

productos.unshift(new Producto(27, "whisky blue label", 3000, 1));

let totalCompra = 0;

function compra() {

    let descuento = 0.3;
    let recargaCredito = 0.2;
    let salir = false; //Defino la variable salir como false, va a actuar como variable de control para finalizar el bucle
    
    for (const producto of productos) {
        
        let productoComprado = prompt("INGRESE EL PRODUCTO QUE QUIERE COMPRAR").toLowerCase();

        let productoEncontrado = productos.find(item => item.nombre === productoComprado);

        if (productoEncontrado){

            alert (`Bien, tenemos ${productoComprado}!, tenemos en stock ${productoEncontrado.stock} unidades y cuesta $${productoEncontrado.precio} pesos`);

        } else {

            alert("Ingresó una opción no válida.");
           // i--; // Resto 1 al contador para repetir la selección de producto.
           continue;
        }

        let precio;
        let metodoDePago = prompt("Va a pagar en efectivo, débito o crédito?").toLowerCase();

        // Verifico el método de pago y calculo el precio final.
        if (metodoDePago === "efectivo") {

            precio = productoEncontrado.precio - (productoEncontrado.precio * descuento);
            alert(`Pagando en efectivo, el precio final de ${productoComprado} es $${precio} pesos`);

        } else if (metodoDePago === "debito") {

            precio = productoEncontrado.precio;

            alert(`Pagando con débito, el precio final de ${productoComprado} es $${productoEncontrado.precio} pesos`);

        } else if (metodoDePago === "credito") {

            precio = productoEncontrado.precio + (productoEncontrado.precio * recargaCredito);
            alert(`Pagando con crédito, el precio final de ${productoComprado} es $${precio} pesos`);

        } else {

            alert("Ingresó una opción no válida.");
            // Resto 1 al contador para repetir la selección del mètodo de pago.
            continue;
            
        }

        let cantidadComprada = Number(prompt(`¿Cuántas unidades de ${productoComprado} quiere comprar?`));

        //Voy a hacer un condicional para que si no hay stock, la compra no se pueda realizar.
        if (cantidadComprada > productoEncontrado.stock) {

            alert("No se puede hacer la compra, no hay suficiente stock");
             // Resto 1 al contador para repetir cuantos productos quiere comprar.
            continue;
        } else {

            // Calculo el precio final y resto el stock del producto seleccionado.

            let precioFinal = precio * cantidadComprada;
            alert(`El precio final a pagar es: $${precioFinal} pesos`);

            totalCompra += precioFinal;

            // Actualizamos el stock del producto seleccionado.

            productoEncontrado.stock -= cantidadComprada;
            alert(`El stock de ${productoComprado} que queda es de ${productoEncontrado.stock}`);
            
        }
        // Procedo a preguntar al cliente si quiere hacer otra compra

        let preguntaRecompra = prompt("¿Quieres realizar otra compra? (si/no)").toLowerCase();

        if (preguntaRecompra === "no") {
            salir = true; // Defino la variable de control como true para salir del bucle y finalizar la compra
            break;
        } else if (preguntaRecompra !== "si") {
            alert("Ingresó una opción no válida");
            continue; //Si se coloca una respuesta distinta a si o no, se vuelve al inicio de la funcion compra()
        }
    }

    if (salir) {
        alert(`Gracias por su compra!! :D, el total a pagar es: $${totalCompra} pesos`); //Al darse la variable salir como true, ya le muestro al cliente el total que debe pagar, y asi terminamos el proceso
    }
}
compra();

//HASTA AHORA ASI COMO ESTA NO ESTA MAL PERO ME LIMITO EL INTENTO DE LA COMPRA A LA CANTIDAD DE OBJETOS QUE HAY DENTRO DEL ARRAY, ES DECIR, SI HAY 2 PRODUCTOS DENTRO DEL CATALOGO PARA COMPRAR, SOLO PUEDO HACER 2 INTENTOS DE COMPRA