/*let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
alert("Hola " + nombre + " " + apellido);

let numero1 = prompt("Ingrese un numero");
let numero2 = prompt("Ingrese otro mas");
let resultado = parseInt(numero1) + parseInt(numero2);
alert("El resultado de la suma de los numeros que ingresó es: " + resultado);*/

///////////////////////////////////////////////////////////////

// let numero1 = Number(prompt("Ingrese el primer numero"));
// let numero2 = Number(prompt("Ingrese el segundo numero"));
// let operacion = prompt("Ingrese +, -, * o / segun la operacion que quiere realizar");
// let resultado;

/* switch(operacion){
     case "+":
     resultado = numero1 + numero2;
     alert ("El resultado de la suma de los numeros es: " + resultado);
     break;

     case "*":
     resultado = numero1 * numero2;
     alert ("El resultado de la multiplicaion de los numeros es: " + resultado);
     break;
        
     case "-":
     resultado = numero1 - numero2;
     alert ("El resultado de la resta de los numeros es: " + resultado);
     break;

     case "/":
     resultado = numero1 / numero2;
     alert ("El resultado de la division de los numeros es: " + resultado);
     break;

     default:
     alert ("Ingreso una operacion distinta a la solicitada, intente de nuevo");
 }*/

///////////////////////////////////////////////////////////////

/*for (let i=1;i<=100;i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
}*/

///////////////////////////////////////////////////////////////

//EJERCICIOS UOC

//1)ESCRIBE UN PROGRAMA DE UNA SOLA LINEA QUE HAGA QUE APAREZCA EN LA PANTALLA UN ALERT QUE DIGA "HELLO WORLD"
//alert("Hello World");

//2)ESCRIBE UN PROGRAMA DE UNA SOLA LINEA QUE ESCRIBA EN LA PANTALLA UN TEXTO QUE DIGA "HELLO WORLD"(document.write)
//document.write("chaco");

//3)ESCRIBE UN PROGRAMA DE UNA SOLA LINEA QUE ESCRIBA EN LA PANTALLA EL RESULTADO DE SUMAR 3+5
//document.write(3+5);

//4)ESCRIBE UN PROGRAMA DE DOS LINEAS QUE PIDA EL NOMBRE DEL USUARIO CON UN PROMPT Y ESCRIBA UN TEXTO QUE DIGA "HOLA NOMBREUSUARIO"
/*let nombreUsuario = prompt("Ingrese su nombre aquí");
document.write("Hola " + nombreUsuario);*/

//5)ESCRIBE UN PROGRAMA DE TRES LINEAS QUE PIDA UN NUMERO, PIDA OTRO NUMERO Y ESCRIBA EL RESULTADO DE SUMAR ESTOS DOS NUMEROS
/*let numero1 = Number(prompt("Ingrese el primer numero a sumar"));
let numero2 = Number(prompt("Ingrese el segundo numero"));
document.write(numero1 + numero2);*/

//6)ESCRIBE UN PROGRAMA QUE PIDA DOS NUMEROS Y ESCRIBA EN LA PANTALLA CUAL ES EL MAYOR
/*let numero1 = Number(prompt("Ingrese el primer numero"));
let numero2 = Number(prompt("Ingrese el segundo numero"));
document.write("Según los números que ingresó, el mayor es: " + Math.max(numero1, numero2));*/

//7)ESCRIBE UN PROGRAMA QUE PIDA 3 NUMEROS Y ESCRIBA EN LA PANTALLA EL MAYOR DE LOS 3
/*let numero1 = Number(prompt("Ingrese el primer numero"));
let numero2 = Number(prompt("Ingrese el segundo numero"));
let numero3 = Number(prompt("Ingrese el tercer numero"));
document.write("Según los números que ingresó, el mayor es: " + Math.max(numero1, numero2, numero3));*/

//8)ESCRIBE UN PROGRAMA QUE PIDA UN NUMERO Y DIGA SI ES DIVISIBLE POR 2
/*let numero = Number(prompt("Ingrese el numero"));
if (numero % 2 == 0){
    document.write("El número es divisible por 2");
}else{
    document.write("El número no es divisible por 2");
}*/

//9)ESCRIBE UN PROGRAMA QUE PIDA UNA FRASE Y ESCRIBA CUANTAS VECES APARECE LA LETRA "A"
/*let frase = prompt("Ingrese una frase");
let longitud = frase.length;
let i;
for ( i=0 ; i < frase.length ; i++ ){
    if(frase.length==="a"){
        document.write("Su frase tiene " + i + " letras A");
    }
}*/

// PEDIR UN NUMERO MAYOR A 1000 Y MOSTRAR UN ALERT - PEDIR UN TEXTO MEDIANTE PROMPT Y SI ES IGUAL A "HOLA" MOSTRAR UN
// ALERT POR CONSOLA - PEDIR UN NUMERO POR PROMPT Y EVALUAR SI ESTA ENTRE 10 Y 50. EN CASO QUE SI, MOSTRAR UN ALERT
/*let numero = Number(prompt("ingrese numero"));
let texto = prompt("ingrese un texto");

if (numero > 1000){
    alert(`${numero} es mayor a 1000`);
}else if (numero >= 10 && numero <=50){
    alert(`${numero} esta entre 10 y 50`);
}else{
    alert("vuelva a ingresar un numero");
}

if(texto === "hola"){
    alert(`${texto}, como estas?`);
}else{
    alert("vuelva a ingresar un texto");
}*/

// INTENTO DE LENADO DE UN ARRAY
/*for(let nombres[i]=0; nombres[i] <= 10; i++){
    nombres = [prompt("Ingrese nombres")];
    alert(nombres[i]);
}
console.log(`la lista esta conformada por: ${lista}`);*/


//PEDIR NUMERO MEDIANTE PROMPT Y SUMARLE OTRO NUMERO EN CADA REPETICION REALIZANDO UNA SALIDA POR CADA RESULTADO
/*let numero = Number(prompt("Ingrese un numero"));

for (let i = 0 ; i < 5; i++){
    let resultado = (numero + i);
    alert (`La suma de ${numero} + ${i} es igual a ${resultado}`);
}*/

// PEDIR UN TEXTO, CONCATENAR UN VALOR EN CADA REPETICION, REALIZANDO UNA SALIDA POR CADA RESULTADO, HASTA QUE SE INGRESA "ESC"
/*let texto = prompt("Ingrese un texto");

while(texto != "ESC"){

    console.log(`El texto ingresado es ${texto}`);
    
    prompt("Ingrese otro texto");
}
console.log("Proceso finalizado");*/

// PEDIR UN NUMERO, REPETIR LA SALIDA DEL MENSAJE "HOLA" LA CANTIDAD DE VECES DEL NUMERO INGRESADO
/*let numero = Number(prompt("Ingrese cuantas veces quiere que le digamos Hola"))

for( let i = 0; i < numero; i++){
        console.log("Hola!");
    };

if(numero === 0){
alert("No ingreso un numero valido");
}*/

//---------------------------------------------------------------------------EJERCICIOS DE CONDICIONALES
//CREAR UN SCRIPT QUE DIGA SI UN NUMERO ES PAR O IMPAR

/*let numero = Number(prompt("Ingrese un numero para decirle si es par o impar"));

if(numero === 0){
    alert(`El numero ingresado ${numero} no es par ni es impar`);
} else if(numero % 2 != 0){
    alert(`El numero ingresado ${numero} es impar`);
} else if(numero %2 === 0){
    alert(`El numero ingresado ${numero} es par`);
}else{
    alert("El caracter ingresado es inválido");
}*/

//CREAR UN PROGRAMA QUE DIGA SI UN NUMERO ES POSITIVO O NEGATIVO. EL CERO SE CONSIDERA POSITIVO

/*let numero = Number(prompt("Ingrese un numero para decirle si es positivo o negativo"));

if(numero >= 0){
    alert(`El numero ingresado ${numero} es positivo`);
} else if(numero < 0){
    alert(`El numero ingresado ${numero} es negativo`);
} else{
    alert("El caracter ingresado es inválido");
}*/

//PEDIR 2 NUMEROS ENTEROS Y DEVOLVER EL COCIENTE DE DIVIDIR EL 1RO ENTRE EL 2DO, PERO SI ESTE ES CERO NO DEBE HACER LA DIVISION, SINO LANZAR UN MENSAJE DE ERROR

/*let numero1 = Number(prompt("Ingrese el primer número"));
let numero2 = Number(prompt("Ingrese el segundo número"));
let cociente;

if (numero1 === 0 || numero2 === 0){
    alert("Error");
} else if (numero1 != 0 && numero2 != 0){
    cociente = (numero1 / numero2);
    alert(`El cociente de ${numero1} entre ${numero2} es: ${cociente}`);
}else{
    alert("Uno de los caracteres ingresados es inválido");
}*/

//UN SCRIPT PIDE AL USUARIO QUE TECLEE UNA LETRA ANTRE A, B, C, D. SI PULSA LA LETRA A EN MAYUSCULA O EN MINUSCULA LE DARA EL MENSAJE DE QUE HA ACERTADO, SINO, LE DIRA QUE SE EQUIVOCO

/*let letra = prompt("Ingrese una letra entre A, B, C, D").toLowerCase();

if (letra === "a"){
    alert("Ha acertado!! Felicitaciones!! :D");
}else if (letra === "b" || letra === "c" || letra === "d"){
    alert("Lo lamento, te has equivocado :(");
}else{
    alert("No ingresó una letra entre A, B, C o D");
}*/

//EN ESTE EJEMPLO EL USUARIO ENTRARA DOS NUMEROS. DEBE DEVOLVER LA DIFERENCIA ENTRE EL MAYOR Y EL MENOR

/*let numero1 = Number(prompt("Ingrese el primer número"));
let numero2 = Number(prompt("Ingrese el segundo número"));

if (numero1 < numero2){
    let resultado = (numero2 - numero1);
    alert(`La diferencia entre ${numero2} y ${numero1} es: ${resultado}`);
}else if (numero1 > numero2){
    resultado = (numero1 - numero2);
    alert(`La diferencia entre ${numero1} y ${numero2} es: ${resultado}`);
}else{
    alert("Alguno de los caracteres ingresados no es un número");
}*/

//ESTE EJERCICIO DIRIGIRA A LOS CLIENTES A LA BARRA DE BEBIDAS O AL A DE COMIDAS, PARA ELLOS, EL CLIENTE PUEDE PEDIR VINO, CERVEZA, REFRESCO, AGUA. SI PIDE CERVEZA O VINO, SE DIRIGE A LA BARRA Y SINO, PUES SE LE DIRIGE A LA TIENDA

/*let pedido = prompt("Ingrese su pedido: quiere Vino, Cerveza, Refresco o Agua?").toLowerCase();

if (pedido === "cerveza" || pedido === "vino"){
    alert(`Su pedido fue ${pedido}, dirijase a la barra`);
}else if(pedido === "refresco" || pedido === "agua"){
    alert(`Su pedido fue ${pedido}, dirijase a la tienda`);
}else{
    alert("Error en el pedido");
}*/

//ESTE PROGRAMA TE AYUDA A VIAJAR. EL MISMO PIDE AL USUARIO SI VA A VIAJAR CON COCHE, TREN, BICICLETA O AUTOBUS. SI VAN EN TREN O AUTOBUS, LE RECORDARA QUE LLEVE DINERO PARA EL BILLETE

/*let transporte = prompt("Ingrese en que medio de transporte va a viajar: Tren, Autobus, Coche o Bicicleta").toLowerCase();

if (transporte === "tren" || transporte === "autobus"){
    alert(`Va a ir en ${transporte}. Recuerde que debe llevar dinero para pagar el billete.`);
}else if (transporte === "coche" || transporte === "bicicleta"){
    alert(`Va a ir en ${transporte}. No es necesario llevar dinero.`);
}else{
    alert("Error");
}*/

//EN UNTRAMO DE UN RALLY LOS CONDUCTORES NO DEBEN IR NI DEMASIADO RAPIDO NI DEMASIADO LENTOS. ESTE EJERCICIO DEBE TOMAR LA LONGITUD DEL TRAMO EN KM Y EL TIEMPO EMPLEADO, SI LA VELOCIDAD ESTA ENTRE 40 Y 60 KM/H, EL CONDUCTOR PASA LA PRUEBA, EN CASO CONTRARIO ES DESCALIFICADO

/*let tramoRealizado = Number(prompt("Ingrese cuanto km ha realizado"));
let tiempoDelTramo = Number(prompt("Ingrese cuantos minutos le demoró hacer ese tramo"));
let kmPorHora = (tramoRealizado / (tiempoDelTramo/60));

if (kmPorHora < 40){
    alert(`Muy lento, está descalificado, su velocidad fue de ${kmPorHora}km/hora`);
}else if (kmPorHora >= 40 && kmPorHora <= 60){
    alert(`Su velocidad fue de ${kmPorHora}km/hora. Puede continuar`);
}else if (kmPorHora > 60){
    alert(`Muy rápido, está descalificado, su velocidad fue de ${kmPorHora}km/hora`);
}else{
    alert("Error. Datos mal ingresados");
}*/

//UNA TIENDA APLICA UN DESCUENTO DEL 15% PARA LAS COMPRAS QUE INCLUYAN MAS DE 10 ARTICULOS IGUALES CUYO PRECIO SEA SUPERIOR A 40 EUROS. TU PROGRAMA DEBE COMPROBAR Y CALCULAR LA CANTIDAD A PAGAR SABIENDO EL NUMERO DE ARTICULOS Y EL PRECIO DE CADA UNO

/*let cantidadArticulos = Number(prompt("Ingrese la cantidad de artículos que compró"));
let precioArticulos = Number(prompt("Cuanto era el precio en euros?"));
let descuento = 0.15;
let totalSinDescuento = (cantidadArticulos * precioArticulos);
let totalConDescuento;

if (totalSinDescuento < 40 || cantidadArticulos < 10){
    alert(`No tienes descuento. El total a pagar es ${totalSinDescuento} euros`);
}else if (totalSinDescuento > 40 && cantidadArticulos >= 10){
    totalConDescuento = totalSinDescuento - (totalSinDescuento * descuento);
    alert(`Tienes un descuento!! El total a pagar es ${totalConDescuento} euros`);
}else{
    alert("A ingresado mal algún dato");
}*/

//CREA UN PROGRAMA QUE PIDA LA NOTA DE UN ESTUDIANTE EN LOS 3 TRIMESTRES DEL CURSO Y CALCULE LA NOTA PROMEDIO. EL RESULTADO QUE DARA SERA SUSPENSION SI LA MEDIA ES MENOR DE 5, APROBADO SI ES ENTRE 5 Y 7 Y NOTABLE SI ES POR ENCIMA DE 7

/*let notaPrimerTrimestre = Number(prompt("Ingrese la nota del 1er trimestre"));
let notaSegundoTrimestre = Number(prompt("Ingrese la nota del 2do trimestre"));
let notaTercerTrimestre = Number(prompt("Ingrese la nota del 3er trimestre"));
let notaPromedio = (notaPrimerTrimestre + notaSegundoTrimestre + notaTercerTrimestre) / 3;

if (notaPromedio < 5){
    alert(`El alumno tuvo una nota promedio de: ${notaPromedio}. Está suspendido`);
} else if (notaPromedio >= 5 && notaPromedio <= 7){
    alert(`El alumno tuvo una nota promedio de: ${notaPromedio}. Está aprobado`);
} else if (notaPromedio > 7){
    alert(`El alumno tuvo una nota promedio de: ${notaPromedio}. Tuvo un rendimiento notable!! :D`);
} else{
    alert("Algún dato hay sido mal ingresado");
}*/

//---------------------------------------------------------------------------EJERCICIOS DE BUCLES

//USANDO UN BUCLE FOR, ESCRIBIR UN SCRIPT QUE PIDA UN NUMERO ENTERO Y MUESTRE EN PANTALLA UNA LISTA DE NUMEROS DESDE 0 AL VALOR INGRESADO. LOS NUMEROS SE SEPARARAN POR COMAS

/*let numero = Number(prompt("Ingrese un valor"));

for (let i = 0; i <= numero; i++) {
    document.write(`${i} ,`);
}*/

//SE TRATA DE QUE DADO UN NUMERO ENTERO, EL SCRIPT MUESTRE UNA CUENTA HACIA ATRAS, ES DECIR, UNA LISTA DE NUMEROS SEPARADOS POR COMA DESDE EL NUMERO TECLEADO HASTA EL 0

/*let numero = Number(prompt("Ingrese el numero donde empieza el conteo"));

for (let i = 0; i <= numero; numero--) {
    document.write(`${numero} ,`);
}*/

//SE QUIERE UN BUCLE QUE GENERE UNA LISTA CON TODOS LOS NUMEROS PARES POSITIVOS POR DEBAJO DEL NUMERO TECLEADO POR EL USUARIO. LOS NUMEROS SE APARECERAN EN UNA VENTANA ALERT CON CAMBIOS DE LINEA (CARACTER `\n`)

/*let numero = Number(prompt("Ingrese el numero donde termina el conteo"));

for (let i = 0; i <= numero; i++){
    if (i % 2 === 0){
        document.write(`${i}` + "\n");
    }
}*/

//ESTE SCRIPT DEBE ESCRIBIR LA TABLA DE MULTIPLICAR DEL NUMERO QUE EL USUARIO TECLEE. LA TABLA MOSTRARA EN DIFERENTES LINEAS CADA PRODUCTO Y EL RESULTADO EN LA FORMA A x B = AB. RECUERDA QUE EL SALTO DE LINEA ES ATRAVES DE "\n"

/*let numero = Number(prompt("Ingrese el numero al cual quiere hacer la tabla"));
let producto;

for (let i = 0; i <= 10; i++) {
    producto = (numero * i);
    alert(`${numero} * ${i} = ${producto}` + "\n");
}*/

/*let base, contador, prefijo, producto, msg=``;
base = parseInt(prompt("Tabla del..."));
prefijo = base + "X";
for ( contador = 0; contador <= 10; contador++) {
    producto = base*contador;
    msg += prefijo + contador + " = " + producto + "\n";
}
alert("Tabla del " + base + "\n" + msg);*/

//EN ESTE EJERCICIO MEZCLAMOS BUCLES CON CONDICIONALES: EL USUARIO ESCRIBE UN NUMERO Y EL SCRIPT IMPRIMIRA(CONSOLE.LOG) TODOS LOS NUMEROS MENORES QUE AL DIVIDIRLOS POR 3 DEN COMO RESTO 2. RECUERDA: UN NUMERO ES MULTIPLO DE n CUANDO AL DIVIDIRLO POR n EL RESTO ES 0

/*let numero = Number(prompt("Ingrese el numero donde empieza la cuenta regresiva"));

if (numero !== Number){ //CORREGIR PARA CUANDO EL DATO NO SEA DEL TIPO NUMERO
    alert ("Ingreso un dato inválido")
} else{

alert(`Los números hasta ${numero} que dividido 3 dan un resto de 2 son:`);

for (let i = 0; i < numero; i++) {
    if (i % 3 === 2) {
        document.write(`${i}` + "\n");
    }
}
}*/

//EN ESTE SCRIPT EL USUARIO DEBERA TECLEAR UNA LETRA Y UN NUMERO, Y EL PROGRAMA MOSTRARA UNA CADENA FORMADA POR LA LETRA REPETIDA EL NUMERO QUE TECLEADO
// EJ = 5 Y X. RESULTADO = XXXXX

/*let letra = prompt ("Ingrese la letra que quiere que se repita").toLocaleUpperCase();
let numero = Number(prompt("Cuantas veces quiere que se repita la letra?"));
let concatenacion = ''; //SI NO LE PONGO LAS TILDES, ME VA A ARROJAR UNDEFINED + LAS LETRAS CONCATENACION, SI LAS PONGO, NO APARECE EL UNDEFINED
let resultado;

for (let i = 1; i <= numero; i++) {
    concatenacion += letra;
}
alert (`${concatenacion}`);//TENGO QUE PONER EL ALERT FUERA, SI LO PONGO DENTRO DEL FOR ME VA A IMPRIMIR LETRA POR LETRA LAS NUMERO DE VECES QUE LAS PEDI, HACIENDO DE ESTA MANERA, SALEN TODAS LAS LETRAS JUNTAS Y CONCATENADAS LAS VECES INDICADAS EN NUMERO

//MEJORA: ME GUSTARIA QUE AL LADO DE CADA LETRA HAYA UN NUMERO PARA SABER SI LAS LETRAS QUE SALEN SON EXACTAMENTE LAS VECES QUE LE PEDI QUE SALGA
*/

//SE PIDE TENER UN CONTADOR DE DO DIGITOS EN BASE 5. EL FUNCIONAMIENTO ES SIMPLE: EL DIGITO DE LA DERECHA IRA AUMENTANDO Y CUANDO PASE DE 4 U VALOR A 0 Y EL DIGITO DE LA IZQUIERDA AUMENTA A 1. EL CONTADOR DEBE DETENERSE CUANDO ALCANCEMOS 1:4

/*for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 4; j++) {
        console.log(`${i}:${j}`);
    }
}*/

//SE TRATA DE DINUJAR UN TRIANGULO CON ASTERISCOS. EL USUARIO TECLEARA UN VALOR ENTERO, EL PROGRAMA ESCRIBIRA CON ASTERISCOS TANTAS LINEAS COMO DIGA ESE NUMERO. CADA LINEA ESTARA FORMADA POR UNA SERIE DE ASTERISCOS TAN LARGA COMO DIGA EL NUMERO DE LINEA EN EL QUE ESTÁ. PARA SEPARAR UNA LINEA DE LA SIGUIENTE CONSOLOE.LOG O ALERT, DEBES USAR "\n"

/*let repeticiones = 5;     //o   parseInt(prompt("Ingrese un numero"));
let asterisco;
let columna;

for (let fila = 0; fila <= repeticiones; fila++) {
    asterisco = ''; //LE INGRESO UN VALOR VACIO PORQUE SI NO LO HAGO, CUANDO MUESTRE UN RESULTADO ME VA A MOSTRAR UNDEFINED PORQUE EN EL PROXIMO BUCLE CUANDO HAGA LA SUMA, ME VA A SUMAR UN VALOR NO DEFINIDO
    for (let columna = 0; columna < fila; columna++) {
        asterisco += "*";
    }
    console.log(`${asterisco}`); //INGRESO EL CONSOLE LOG ACA PORQUE SI LO HICIERA POR FUERA DEL BUCLE ME VA A MOSTRAR SOLO LA ULTIMA FILA, ES DECIR, 5 ASTERISCOS
}*/

//SE TRATA DE CREAR UNA APLICACION QUE CALCULE LA SUMA DE TODOS LOS NUMEROS ENTEROS POSITIVOS ENTRE 0 Y EL NUMERO TECLEADO POR EL USUARIO. EL RESULTADO SERA DE LA FORMA "LOS NUMERO ENTEROS DE 0 A N SUMAN SUMA"

/*let numero = Number(prompt("Ingrese hasta que numero hay que sumar"));
let conteo = 0;

for (let i = 0; i <= numero; i++) {
    conteo += i;  
}
alert(`${conteo}`);*/

//PROGRAMA UN SCRIPT QUE PIDA AL USUARIO QUE TECLEE 4 NUMEROS (UNO CADA VEZ). CON ESOS, EL PROGRAMA DEBERA CALCULAR LA MEDIA ARITMETICA. O SEA, LA SUMA DE LOS 4 DIVIDIDA ENTRE 4

/*let numero = 0;
let promedio = 0;
let conteo = 0;

for (let i = 0; i < 4; i++) {
    numero = Number(prompt("Ingrese un numero"));
    conteo += numero;
    alert(`El conteo es igual a: ${conteo}`);
    promedio = (conteo / i);
}

alert(`El promedio final de los números ingresados es: ${promedio}`);*/

//-----------------------------------EJERCICIOS COMPLEMENTARIOS DE CODER-------------------------------------------------------------------------------

//     1)

// let nombre = "Homero";
// let apellido = "Simpson";
// let edad = 33;

//      2)

const ciudad1 = "La Pampa";
const ciudad2 = "San Juan";
const ciudad3 = "Buenos Aires";
const ciudad4 = "Rosario";
const ciudad5 = "Cordoba";

//      3)

// let nombreApellido = "Eddie Areco";
// let edad = 32;
// let nacionalidad = "Argentino";
// let documento = 36138970;
// let estadoCivil = "soltero";
// let domicilio = "Padre Lozano 2242";
// let sexo = "Masculino";
// let fechaPermiso = new Date();
// function sumarDias(fecha, dias){
//     fecha.setDate(fecha.getDate() + dias);
//     return fecha;
//   };
// let d = new Date();
// let vencimientoPermiso = (sumarDias(d, 3650));

// console.log (`Datos del titular de este permiso:\nNombre y Apellido: ${nombreApellido}\nEdad: ${edad}\nNacionalidad: ${nacionalidad}\nDNI: ${documento}\nEstado Civil: ${estadoCivil}\nDomicilio en: ${domicilio}\nSexo: ${sexo}\nFecha de otorgamiento de permiso: ${fechaPermiso}\nPermiso válido hasta: ${vencimientoPermiso}`);

//        4)

// let integrante1 = "Fabrizio";
// let integrante2 = "Gaston";
// let integrante3 = "Bruno";
// let integrante4 = "Eddie";
// let integrante5 = "Marcos";
// let familia = "Integrante de familia numero 1)" + integrante1 + "\n" +
// "Integrante de familia numero 2)" + integrante2 + "\n" +
// "Integrante de familia numero 3)" + integrante3 + "\n" +
// "Integrante de familia numero 4)" + integrante4 + "\n" +
// "Integrante de familia numero 5)" + integrante5;

// console.log(familia);

//            5)

// let numero = Number(prompt("Ingrese un numero para que le aplique un descuento"));
// let descuento10 = numero - (numero*0.1);
// let descuento50 = numero - (numero*0.5);
// let descuento75 = numero - (numero*0.75);

// alert(`A este número ${numero}, si le aplico un descuento de 10%, voy a tener un total de: ${descuento10}`);
// alert(`A este número ${numero}, si le aplico un descuento de 50%, voy a tener un total de: ${descuento50}`);
// alert(`A este número ${numero}, si le aplico un descuento de 75%, voy a tener un total de: ${descuento75}`);


//             6)

// let nombre1 = "eddie";
// let nombre2 = "luisa";
// let nombre3 = "maria";
// let nombre4 = "tito";
// let nombre5 = "juan";
// let nombre6 = "ana";
// let nombre7 = "luis";
// let nombre8 = "kiko";

// function bart(){

//     let nombre = prompt("Ingrese un nombre").toLowerCase();

//     if (nombre === nombre1 || nombre === nombre2 || nombre === nombre3 || nombre === nombre4 || nombre === nombre5 || nombre === nombre6 || nombre === nombre7 || nombre === nombre8){
//         alert("fui yo");
//     }else{
//         alert("Yo no fui");
//         bart();
//     }
// }

// bart();

//           7)

// function tecla(){

//     let input = prompt("Ingrese un caracter, letra o número").toLowerCase();

//     if (input === "y"){
//         alert("correcto");
//     }else{
//         alert("Error");
//         tecla();
//     }

// }

// tecla();

//          8)

// let numero = Number(prompt("Ingrese un número entre 1 y 4"));

// switch(numero){
//     case 1: alert("Elegiste a Homero")
//     break;
//     case 2: alert("Elegiste a Marge")
//     break;
//     case 3: alert("Elegiste a Bart")
//     break;
//     case 4: alert("Elegiste a Lisa")
//     break;
//     default: alert("Error")
//     break;
// }

//           9)

// function presupuesto() {

//     let numero = Number(prompt("Ingrese un número"));

//     if (numero > 0 && numero <= 1000) {
//         alert("Presupuesto bajo");
//     } else if (numero > 1000 && numero <= 3000) {
//         alert("Presupuesto medio");
//     } else if (numero > 3000) {
//         alert("Presupuesto alto");
//     } else {
//         alert("Error de ingreso");
//         presupuesto();
//     }
// }

// presupuesto();

//       10)

// function cargarLista() {

//     let producto1 = prompt("Ingrese un producto de almacen");
//     let producto2 = prompt("Ingrese otro producto de almacen");
//     let producto3 = prompt("Ingrese otro producto de almacen");
//     let producto4 = prompt("Ingrese otro producto de almacen");
//     let lista;

//     if (producto1 != "" && producto2 != "" && producto3 != "" && producto4 != "") {
//         lista = alert(`lista de productos: ${producto1}, ${producto2}, ${producto3}, ${producto4}`);
//     } else {
//         alert("Error, Es necesario cargar todos los productos");
//         cargarLista();
//     }
// }

// cargarLista();

//          11)

// let numero = Number(prompt("Ingrese un número"));
// let texto = prompt("Ingrese un texto").toLowerCase();
// let resultado = "";

// for( let i = 0; i < numero; i++){
//     resultado += texto;
// }

// alert(`${resultado}`);

//         12)

// let numero = Number(prompt("Ingrese un número"));

// for (let i = 0; i < numero; i++) {

//     if (i > 3){
//         break;
//     }
//         alert("lado");

// }

//          13)

// let listaAlumnos = "";

// for (let i = 0; i < 10; i++) {

//     let alumnos = prompt("Ingrese el nombre del alumno").toLowerCase();
//     listaAlumnos += alumnos + "\n";

// }

// alert(`La lista de alumnos es:\n${listaAlumnos}`);

//          14)

// let listaNombres = "";

// for (let i = 0; i < Infinity; i++) {

//     let personaje = prompt("Ingrese personajes de Harry Potter").toLowerCase();

//     listaNombres += personaje + "\n";

//     if (personaje === "voldemort") {
//         break;
//     }
// }

// alert(`La lista de personajes ingresados son:\n${listaNombres}`);

//    15)

// let entrada = (prompt("Ingrese un numero entre 1 y 4 o ESC si quiere terminar la secuencia")).toUpperCase();

// while (entrada != "ESC") {

//     if (entrada === "1"){
//         alert("Tomate");
//     }else if ( entrada === "2"){
//         alert("Papa");
//     }else if ( entrada === "3"){
//         alert("Carne");
//     }else if ( entrada === "4"){
//         alert("Pollo");
//     }

//     entrada = (prompt("Ingrese un numero entre 1 y 4 o ESC si quiere terminar la secuencia")).toUpperCase();
// };

//       16)

// function entrada(){
//     return prompt("Ingrese dato");
// }

// function procesamiento(valor){
//     return "La entrada fue " + valor;
// }

// function salida(valor){
//     alert(`${valor}`);
// }

// salida(procesamiento(entrada()));

//         17)

function redondeo(){
for (let i = 1; i <= 5; i++) {

    let numero = Math.round(prompt("Ingrese un numero decimal"));

    alert(`iteracion número ${i}, tiene el número: ${numero}`);
}
}

redondeo();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

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
productos.push(new Producto(5, "smirnoff", 1930, 24));
productos.push(new Producto(6, "smirnoff maracuya", 1930, 12));
productos.push(new Producto(7, "smirnoff frutos rojos", 2060, 9));
productos.push(new Producto(8, "skyy anana", 2200, 30));
productos.push(new Producto(9, "skyy coco", 2000, 12));
productos.push(new Producto(10, "coca", 990, 230));
productos.push(new Producto(11, "pepsi", 730, 160));
productos.push(new Producto(12, "fanta", 780, 110));
productos.push(new Producto(13, "pritty", 930, 170));

productos.unshift(new Producto(22, "sprite", 1000, 12));

productos.unshift(new Producto(27, "whisky blue label", 3000, 1));

//Inicializo el total de compra para después poder dar un valor de compra total cuando se haga mas de 1 compra

let totalCompra = 0;

function compra() {

    //Creo un array vacío en el cual voy a almacenar los productos que se van comprando para que después pueda mostrar al usuario un resumen de la compra
    const productosComprados = [];
    
    // Inicializo otros valores que se van a usar en los métodos de pago.
    let descuento = 0.3;
    let recargaCredito = 0.2;

    //Defino la variable salir como false, va a actuar como variable de control para finalizar el bucle

    let salir = false;

    alert("Bienvenido a la tienda!!\nTenemos productos que van desde:\nCerveza brahma 473\nCerveza quilmes 473\nCerveza heineken 473\nFernet branca\nVodkas de Skyy y Smirnoff de ananá, frutos rojos, coco, maracuya\nGaseosas de fanta 2 lt, pepsi 2 lt, sprite 3lt y\nWhisky blue label :D");

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
                //Tuve que recurrir a esta opcion ya que en el codigo anterior, si se ingresaba mal una opcion o incluso, si ingresaba un numero, se finalizaba el bucle y estuve buscando como hacer que, al ingresar mal la respuesta, se volviera a hacer la pregunta y no llevar al usuario al inicio de la funcion compra()
                while (true) {

                    // Solicito al usuario que ingrese cuantos productos quiere comprar.
                    let cantidadComprada = Number(prompt(`¿Cuántas unidades de ${productoComprado} desea comprar?`));

                    //si la cantidad ingresada es un numero, si se ingresa un numero positivo y si la cantidad ingresada no supera al stock que tiene el producto, la compra se puede realizar
                    if (!isNaN(cantidadComprada) && cantidadComprada > 0 && cantidadComprada <= productoEncontrado.stock) {

                        //Creamos la constante precio final donde se va a multiplicar el precio según el método de pago por la cantidad comprada
                        const precioFinal = precio * cantidadComprada;

                        //El precio final va a ser sumado al total de la compra para el caso que haya mas de 1 compra realizada
                        totalCompra += precioFinal;

                        //Acá le ingreso, mediante el método push, las propiedades que van a estar dentro del resumen de compra, al constructor vacío productosComprados que había creado antes

                        productosComprados.push({
                            cantidad: cantidadComprada,
                            nombre: productoEncontrado.nombre,
                            pago: metodoDePago,
                            precio: precio,
                            montoTotal: precioFinal,
                        });

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

    alert ("Resumen de productos comprados:");

    //Uso el método forEach donde tome como parámetro cada ítem, que sería los objetos creados en el array productosComprados, para recorrerlos y podes extraer cada información dentro para brindar el resumen de la compra
    productosComprados.forEach(item =>{
        alert(`${item.cantidad} unidades de ${item.nombre}\nPagado con ${item.pago}\nAl precio de: $${item.precio} pesos\nMonto total: $${item.montoTotal} pesos`);
    });

    alert(`Gracias por su compra. Total a pagar: $${totalCompra}`);
}

compra();*/
