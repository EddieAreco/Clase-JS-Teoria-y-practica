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

