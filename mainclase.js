//Comienzo definiendo la clase producto y su constructor correspondiente con las diferentes propiedad de cada producto

/*class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

//Creo el array vacio al cual después le voy a ir cargando lso productos mediante el método push
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

//Inicializo el total de compra para después poder dar un valor de compra total cuando se haga mas de 1 compra

let totalCompra = 0;

function compra() {

    // Inicializo otros valores que se van a usar en los métodos de pago.

    let descuento = 0.3;
    let recargaCredito = 0.2;

    let salir = false; //Defino la variable salir como false, va a actuar como variable de control para finalizar el bucle

    alert("Bienvenido a la tienda!! Tenemos producto que van desde cerveza (de distintas marcas y tamaños), fernet branca, vodkas de Skyy y Smirnoff de diferentes variedades y algunas gaseosas :D")

    for (const producto of productos) {

        // Solicito al usuario que seleccione un producto.

        let productoComprado = prompt("INGRESE EL PRODUCTO QUE QUIERE COMPRAR").toLowerCase();

        //Creo la variable productoEncontrado en donde voy a verificar si el producto ingresado por el usuario se encuentra dentro del array producto

        let productoEncontrado = productos.find(item => item.nombre === productoComprado);

        if (productoEncontrado) {

            alert(`Bien, tenemos ${productoComprado}!, tenemos en stock ${productoEncontrado.stock} unidades y cuesta $${productoEncontrado.precio} pesos`);

        } else {

            alert("Ingresó una opción no válida.");
            // i--; // Resto 1 al contador para repetir la selección de producto.
            continue;
        }

        for (const producto of productos) {

            let precio;

            // Solicito al usuario que ingrese el método de pago.

            let metodoDePago = prompt("Va a pagar en efectivo, débito o crédito?").toLowerCase();

            // Verifico el método de pago y calculo el precio final.
            if (metodoDePago === "efectivo") {

                precio = productoEncontrado.precio - (productoEncontrado.precio * descuento);
                alert(`Pagando en efectivo, el precio final de ${productoComprado} es $${precio} pesos`);
                break; //Ingreso la sentencia break para que se corte el bucle si coincide con alguna de las opciones

            } else if (metodoDePago === "debito") {

                precio = productoEncontrado.precio;

                alert(`Pagando con débito, el precio final de ${productoComprado} es $${productoEncontrado.precio} pesos`);
                break; //Ingreso la sentencia break para que se corte el bucle si coincide con alguna de las opciones

            } else if (metodoDePago === "credito") {

                precio = productoEncontrado.precio + (productoEncontrado.precio * recargaCredito);
                alert(`Pagando con crédito, el precio final de ${productoComprado} es $${precio} pesos`);
                break; //Ingreso la sentencia break para que se corte el bucle si coincide con alguna de las opciones

            } else {

                alert("Ingresó una opción no válida.");
                continue;

            }

        }

        // Solicito al usuario que ingrese cuantos productos quiere comprar.

        let cantidadComprada = Number(prompt(`¿Cuántas unidades de ${productoComprado} quiere comprar?`));

        //Voy a hacer un condicional para que si se ingresa un dato diferente a un número, tenga que volver a la pregunta

        if (isNaN(cantidadComprada) || cantidadComprada <= 0) {

            alert("Ingrese una cantidad válida.");

        } else if (cantidadComprada > productoEncontrado.stock) {

            alert("No hay suficiente stock para esa cantidad.");
            //Si no hay stock, la compra no se pueda realizar.

        } else {

            // Calculo el precio final y resto el stock del producto seleccionado.

            let precioFinal = precio * cantidadComprada;
            alert(`El precio final a pagar es: $${precioFinal} pesos`);

            totalCompra += precioFinal;

            // Actualizamos el stock del producto seleccionado.

            productoEncontrado.stock -= cantidadComprada;

            alert(`El stock de ${productoComprado} que queda es de ${productoEncontrado.stock}`);

            break;
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
compra();/*

//HASTA AHORA ASI COMO ESTA NO ESTA MAL PERO ME LIMITO EL INTENTO DE LA COMPRA A LA CANTIDAD DE OBJETOS QUE HAY DENTRO DEL ARRAY, ES DECIR, SI HAY 2 PRODUCTOS DENTRO DEL CATALOGO PARA COMPRAR, SOLO PUEDO HACER 2 INTENTOS DE COMPRA. POR OTRO LADO, NO ESTA FUNCIONANDO EL BUCLE DE CANTIDAD COMPRADA YA QUE SI ESTA DENTRO O FUERA DE UN FOR OF, POR MAS QUE INGRESE UN NUMERO O NO, SE CORTA LA FUNCION AHI*/


/*class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

//Creo el array vacio al cual después le voy a ir cargando lso productos mediante el método push
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

//Inicializo el total de compra para después poder dar un valor de compra total cuando se haga mas de 1 compra

let totalCompra = 0;

function compra() {

    // Inicializo otros valores que se van a usar en los métodos de pago.

    let descuento = 0.3;
    let recargaCredito = 0.2;

    //Defino la variable salir como false, va a actuar como variable de control para finalizar el bucle

    let salir = false;

    alert("Bienvenido a la tienda!! Tenemos productos que van desde cerveza (de distintas marcas y tamaños), fernet branca, vodkas de Skyy y Smirnoff de diferentes variedades y algunas gaseosas :D");

    //Uso el bucle for of para tener acceso a los objetos dentro del array productos
    for (const producto of productos) {

        // Ciclo principal para realizar compras con el bucle while con la condicion de salida negativa para que se haga la compra, si salida llega a ser true, se termina la compra

        while (!salir) {

            // Solicito al usuario que ingrese el producto que quiere comprar.
            let productoComprado = prompt("Ingrese el producto que desea comprar").toLowerCase();

            //Creo la variable productoEncontrado en donde voy a verificar si el producto ingresado por el usuario se encuentra dentro del array producto
            let productoEncontrado = productos.find(item => item.nombre === productoComprado);

            if (productoEncontrado) {

                alert(`Tenemos ${productoComprado} en stock.\nPrecio: $${productoEncontrado.precio}\nStock: ${productoEncontrado.stock} unidades`);

                // Solicito al usuario que ingrese el método de pago.

                let metodoDePago;

                while (true) {
                    //Mientras el metodo de pago esté bien ingresado, se va a entrar al bucle, si se ingresa un dato erroneo, no entra y le vuelve a hacer la pregunta

                    metodoDePago = prompt("¿Va a pagar en efectivo, débito o crédito?").toLowerCase();

                    //En caso que el método de pago esté bien ingresado, se sale de este bucle para poder seguir con la compra
                    if (metodoDePago === "efectivo" || metodoDePago === "debito" || metodoDePago === "credito") {
                        break;

                    } else {

                        alert("Opción no válida. Por favor, ingrese efectivo, débito o crédito.");
                    }
                }

                //Defino la variable precio y la asocio al precio del producto encontrado que fue el ingresado por el usuario
                let precio = productoEncontrado.precio;

                if (metodoDePago === "efectivo") {

                    precio -= precio * descuento;
                    alert(`El precio pagando en efectivo es $${precio}`);

                } else if (metodoDePago === "credito") {

                    precio += precio * recargaCredito;
                    alert(`El precio pagando con credito es $${precio}`);

                } else if (metodoDePago === "debito") {

                    alert(`El precio pagando con debito es $${precio}`);

                }

                // Ciclo para solicitar la cantidad de productos hasta que sea una cantidad válida
                //Tuve que recurrir a esta opcion ya que en el codigo anterior, si se ingresaba mal una opcion o incluso, si ingresaba un numero, se finalizaba el bucle y estuve buscando como hacer que, al ingrear mal la respuesta, se volviera a hacer la pregunta y no llevar al usuario al inicio de la funcion compra()
                while (true) {

                    // Solicito al usuario que ingrese cuantos productos quiere comprar.
                    let cantidadComprada = Number(prompt(`¿Cuántas unidades de ${productoComprado} desea comprar?`));

                    //si la cantidad ingresada es un numero, si se ingresa un numero positivo y si la cantidad ingresada no supera al stock que tiene el producto, la compra se puede realizar
                    if (!isNaN(cantidadComprada) && cantidadComprada > 0 && cantidadComprada <= productoEncontrado.stock) {

                        //Creamos la constante precio final donde se va a multiplicar el precio según el método de pago por la cantidad comprada
                        const precioFinal = precio * cantidadComprada;

                        //El precio final va a ser sumado al total de la compra para el caso que haya mas de 1 compra realizada
                        totalCompra += precioFinal;

                        //Actualizamos el stock del prodcuto comprado
                        productoEncontrado.stock -= cantidadComprada;

                        alert(`Compra exitosa. El precio total es $${precioFinal}. Stock restante: ${productoEncontrado.stock}`);
                        break;

                    } else {
                        //Respuesta en el caso que no se ingrese un número, si se pone un número negativo o si se quiere comprar una cantidad superior al stock
                        alert("Ingrese una cantidad válida y que esté dentro del stock disponible.");
                    }
                }
            } else {

                //En caso que el usuario quiera un producto que no tenemos disponible, aparece este mensaje y se le vuelve a realizar la pregunta de que quiere comprar
                alert("Disculpe, no tenemos ese producto. Por favor, ingrese un producto disponible.");
            }

            // Procedo a preguntar al cliente si quiere hacer otra compra

            const preguntaRecompra = prompt("¿Desea realizar otra compra? (si/no)").toLowerCase();

            if (preguntaRecompra === "no") {
                salir = true; // Defino la variable de control como true para salir del bucle y finalizar la compra
            } else if (preguntaRecompra !== "si") {
                alert("Opción no válida."); //Si se coloca una respuesta distinta a si o no, se vuelve al inicio de la funcion compra(), pero igualmente la compra queda guardada
            }
        }
    }

    alert(`Gracias por su compra. Total a pagar: $${totalCompra}`);
}

compra();*/

const nombres = ["luis", "ana", "pepe", "juan", "jose", "laura"];

const generarNombre = () => {
    let index = Math.floor(Math.random() * nombres.length)//hasta donde quiero que vaya, hasta la longitud del arreglo);
    return nombres[index];
};

console.log(generarNombre());
console.log(generarNombre());
console.log(generarNombre());
console.log(generarNombre());
console.log(generarNombre());


const mostrarProducto = (productos) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>Id: ${productos.id}</h2>
      <p>Nombre: ${productos.nombre}</p>
      <b>$${productos.precio}</b>
      <b>Stock: ${productos.stock}</b>
      <hr />
    `;
    document.body.append(div);
  };
  
  class Producto {
    constructor(id, nombre, precio, stock) {
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

  
  productos.forEach((productos) => {
    mostrarProducto(productos);
  });