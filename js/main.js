// // Cadenas de caracteres que se utilizarán para la contraseña.

// const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
// const numeros = "0123456789";
// const simbolos = "!@#$%&-";


// // Función que genera una contraseña aleatoria basada en las opciones proporcionadas.

// function generarContrasenia(cantidadDeCaracteres, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos) {
//     let caracteres = "";
//     // Construye la cadena de caracteres que se utilizarán para generar la contraseña.
//     if (incluirMayusculas) caracteres += letrasMayusculas;
//     if (incluirMinusculas) caracteres += letrasMinusculas;
//     if (incluirNumeros) caracteres += numeros;
//     if (incluirSimbolos) caracteres += simbolos;


// // Genera la contraseña seleccionando caracteres aleatorios de las cadenas de caracteres.
   
//     let contrasenia = "";
//     for (let i = 0; i < cantidadDeCaracteres; i++) {
//         const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
//         contrasenia += caracteres[indiceAleatorio];
//     }
//     return contrasenia;
// }


// // Función que solicita al usuario las opciones para generar la contraseña.

// function opcionesDeContrasenia() {
//     let cantidadDeCaracteres;
//     // Se repite hasta que el usuario ingrese un número válido.
//     do {
//         cantidadDeCaracteres = parseInt(prompt("Ingrese cantidad de caracteres de la contraseña (Solo números):"));
//     } while (isNaN(cantidadDeCaracteres));
//     // Solicita al usuario las opciones para incluir o no ciertos tipos de caracteres a la contraseña.
//     const incluirMayusculas = confirm("Incluir letras mayúsculas?");
//     const incluirMinusculas = confirm("Incluir letras minúsculas?");
//     const incluirNumeros = confirm("Incluir números?");
//     const incluirSimbolos = confirm("Incluir símbolos?");
//     return { cantidadDeCaracteres, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos };
// }


// // Función que genera y muestra la contraseña.

// function generarYmostrarContrasenia() {
//     // Obtiene las opciones del usuario.
//     const opciones = opcionesDeContrasenia();
//     // Genera la contraseña basada en las opciones.
//     const contrasenia = generarContrasenia(opciones.cantidadDeCaracteres, opciones.incluirMayusculas, opciones.incluirMinusculas, opciones.incluirNumeros, opciones.incluirSimbolos);
//     // Muestra la contraseña al usuario en un alert.
//     alert("Su contraseña es:\n" + contrasenia);
//     // Consologea la contraseña generada.
//     console.log("Contraseña generada:", contrasenia);
// }


// // Inicia el proceso de generación y muestra de contraseña.
// generarYmostrarContrasenia();


//--------------------------- PRACTICAS -----------------------------------------

// Calculadora de promedio:

//     Crea un array que contenga una serie de números (por ejemplo, las calificaciones de un estudiante).
//     Utiliza un bucle for para calcular la suma de todos los números en el array.
//     Divide la suma por la cantidad de números en el array para calcular el promedio.
//     Muestra el promedio calculado en la consola.

// const calificaciones = [7, 6, 9, 5, 8, 6, 8];

// let sumaCalificaciones = 0; // Inicializa una variable para almacenar la suma de las calificaciones

// // Bucle for que recorre cada elemento del array calificaciones
// for (let i = 0; i < calificaciones.length; i++) {
//     sumaCalificaciones = sumaCalificaciones + calificaciones[i];// Suma el valor del elemento actual al acumulador de la suma
// }

// const promedio = sumaCalificaciones / calificaciones.length; // Calcula el promedio dividiendo la suma total por la cantidad de calificaciones

// console.log("El promedio de las calificaciones es: " + promedio); // Muestra el promedio calculado en la consola


//-------------------------------------------------------------------------------------------------------

// Lista de la compra:

//     Crea un array que contenga una lista de productos de la compra (por ejemplo, "pan", "leche", "huevos", etc.).
//     Utiliza un bucle for para recorrer cada producto del array.
//     Muestra un mensaje para cada producto indicando que está en la lista de la compra.


// const listaProductos = ["pan", "arroz", "fideos", "milanesas", "soda", "huevos"];
    
// for (let i = 0; i < listaProductos.length; i++) {
//          console.log (listaProductos[i] + " está en la lista.");
//     };


//-------------------------------------------------------------------------------------------------------

// Tabla de multiplicar:

// Elije un número para generar su tabla de multiplicar.
// Utiliza un bucle for para recorrer los números del 1 al 10.
// Muestra en la consola el resultado de multiplicar el número elegido por cada número del 1 al 10.

// let numeroIngresado = parseInt ( prompt ("Ingrese un número:"));

//  for (let i = 1; i <= 10; i++) {
//     let resultado = i * numeroIngresado;
//     console.log (i + " x " + numeroIngresado + " = " + resultado);
//     };


//---- [] ----- {} --------------------------------------------------------------------

// Calculadora de promedio:
// Pide al usuario que ingrese una serie de números separados por comas.
// Utiliza JavaScript para calcular el promedio de esos números.
// Muestra el resultado en la consola.

// const serieNumerica = [];

// function solicitarNumeros() {
//     let continuar = true;
//     while (continuar) {
//       let numeroIngresado = parseInt(prompt(`Ingrese un número:
//   (O ingrese '0' para finalizar)`));
//       if (!isNaN(numeroIngresado)) {
//         if (numeroIngresado === 0) {
//           continuar = false;
//         } else {
//           serieNumerica.push(numeroIngresado);
//         }
//       } else {
//         alert("Por favor, ingrese un valor numérico válido.");
//       }
//     }
//   };

//   solicitarNumeros();

//   function ArrayAvg(serieNumerica) {
//     let i = 0; summ = 0; ArrayLen = serieNumerica.length;
//     while (i < ArrayLen) {
//       summ = summ + serieNumerica[i++];
//     }
//     return summ / ArrayLen;
//   }

//   let a = ArrayAvg(serieNumerica);

//   console.log (serieNumerica);

//   console.log("El promedio de los números ingresados es: " + a.toFixed(2));
  

//---- [] ----- {} --------------------------------------------------------------------

// Contador de vocales:
// Pide al usuario que ingrese una palabra o frase.
// Utiliza un bucle para contar cuántas veces aparece cada vocal (a, e, i, o, u) en la palabra o frase.
// Muestra los resultados en la consola.

// const palabraIngresada = prompt("Ingrese una palabra").toLowerCase();

// const vocales = {"a":0, "e":0,  "i":0, "o":0, "u":0 };

// for (let i = 0; i < palabraIngresada.length; i++) {
//     let letra = palabraIngresada[i];
//     if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
//         vocales[letra]++;
//     }
// };
// console.log("Palabra ingresada: " + palabraIngresada);
// console.log("Cantidad de letras A: " + vocales.a);
// console.log("Cantidad de letras E: " + vocales.e);
// console.log("Cantidad de letras I: " + vocales.i);
// console.log("Cantidad de letras O: " + vocales.o);
// console.log("Cantidad de letras U: " + vocales.u);


//---- [] ----- {} --------------------------------------------------------------------

// Generador de números aleatorios:
// Pide al usuario que ingrese un número.
// Utiliza un bucle para generar esa cantidad de números aleatorios entre 1 y 100.
// Muestra los números aleatorios en la consola.

// let numeroIngresado = parseInt(prompt("Ingrese un número entre 1 y 10:"));

// for (let i = 0; i < numeroIngresado; i++) {
//     let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Math.floor rendondea hacia abajo a un número entero Ej: 2.5 => 2
//     console.log(numeroAleatorio);                              // Math.random crea un número aleatorio entre 0 y 1 (aunque 1 no esta incluído)
// };


//---- [] ----- {} ------ `` -------------------------------------------------------------

// Validador de contraseña:
// Pide al usuario que ingrese una contraseña.
// Utiliza JavaScript para verificar si la contraseña cumple con ciertos requisitos, como longitud mínima, uso de letras mayúsculas y minúsculas, y caracteres especiales.
// Muestra un mensaje indicando si la contraseña es válida o no.


// let contraseniaIngresada = prompt(`Ingrese una contraseña:
// Requisitos mínimos:
// - 8 o mas caracteres
// - Incluir Mayúsculas
// - Incluir Minúsculas
// - Incluir Números
// - Incluir Símbolos`);

// // Validar longitud mínima de la contraseña:

// if (contraseniaIngresada.length < 8) {
//     alert("La contraseña debe tener al menos 8 caracteres.");
//     console.log("La contraseña debe tener al menos 8 caracteres.");
// } else {
//     // Resto del código para verificar las demás condiciones:

//     const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
//     const numeros = "0123456789";
//     const simbolos = "!@#$%&-";

//     let contieneMayuscula = false;
//     let contieneMinuscula = false;
//     let contieneNumero = false;
//     let contieneSimbolo = false;

//     for (let caracter of contraseniaIngresada) { // Ciclo for-of para recorrer cada caracter del texto
//         if (letrasMayusculas.includes(caracter)) {  // .includes() para verificar si un substring existe dentro de una cadena de texto
//             contieneMayuscula = true;
//         } else if (letrasMinusculas.includes(caracter)) {
//             contieneMinuscula = true;
//         } else if (numeros.includes(caracter)) {
//             contieneNumero = true;
//         } else if (simbolos.includes(caracter)) {
//             contieneSimbolo = true;
//         }
//     }

//     // Verificar si la contraseña cumple con los requisitos:

//     if (contieneMayuscula && contieneMinuscula && contieneNumero && contieneSimbolo) {
//         alert("¡La contraseña es válida!");
//         console.log("¡La contraseña es válida!");
//     } else {
//         // Mostrar mensaje indicando que la contraseña no cumple con los requisitos mínimos
//         alert("La contraseña no cumple con los requisitos mínimos.");
//         console.log("La contraseña no cumple con los requisitos mínimos.");

//         // Permitir al usuario ingresar una nueva contraseña:

//         contraseniaIngresada = prompt(`Ingrese una nueva contraseña:
// Requisitos mínimos:
// - 8 o mas caracteres
// - Incluir Mayúsculas
// - Incluir Minúsculas
// - Incluir Números
// - Incluir Símbolos`);

//     }
// };


//---- [] ----- {} --------------------------------------------------------------------

// Convertidor de temperatura:
// Pide al usuario que ingrese una temperatura en grados Celsius.
// Utiliza JavaScript para convertir esa temperatura a grados Fahrenheit.
// Muestra el resultado en la consola.

// fŕomula pasar celsius a fafrenheit: (0 °C × 9/5) + 32 = 32 °F

// 9/5 = 1.8

// let temperaturaCelsius = parseInt(prompt(`Convertir Grados Celsius a Fahrenheit:
// Ingrese la temperatura que desea convertir:`));

// let temperaturaFahrenheit = 0;

// function convertirTemperatura() {
//     temperaturaFahrenheit = 32 + (temperaturaCelsius * 1.8);
//     return temperaturaFahrenheit;
// }

// convertirTemperatura();

// alert(temperaturaCelsius + "º Celsius" + " = " + temperaturaFahrenheit + "º Fahrenheit");

// console.log(temperaturaCelsius + "º Celsius" + " = " + temperaturaFahrenheit + "º Fahrenheit");



//---- [] ----- {} ------ `` -------------------------------------------------------------

// Suma de los dígitos de un número:
// Pide al usuario que ingrese un número entero positivo y calcula la suma de todos 
// sus dígitos.



//---- [] ----- {} ------ `` -------------------------------------------------------------

// Reverso de un número:
// Solicita al usuario que ingrese un número entero y muestra su reverso.
// Por ejemplo, si el usuario ingresa 123, deberías mostrar 321.



//---- [] ----- {} ------ `` -------------------------------------------------------------

// Contador de palabras:
// Pide al usuario que ingrese una oración y cuenta cuántas palabras hay en ella.
// Puedes asumir que las palabras están separadas por espacios en blanco.



//---- [] ----- {} ------ `` -------------------------------------------------------------

// Calculadora de factorial:
// Solicita al usuario que ingrese un número entero positivo y calcula su factorial.
// El factorial de un número entero positivo n se define como el producto de todos 
// los números enteros positivos desde 1 hasta n.



//---- [] ----- {} ------ `` -------------------------------------------------------------

// Generador de secuencias Fibonacci:
// Pide al usuario que ingrese un número entero positivo y genera los primeros n 
// términos de la secuencia Fibonacci.



//---- [] ----- {} ------ `` -------------------------------------------------------------

// Juego de adivinanza:
// Crea un juego donde el programa selecciona un número aleatorio entre 1 y 100, y el 
// usuario tiene que adivinarlo. Después de cada intento del usuario, el programa 
// debería decirle si el número a adivinar es mayor o menor que el número ingresado 
// por el usuario.



//---- [] ----- {} ------ `` -------------------------------------------------------------

// Ordenamiento de una lista:
// Pide al usuario que ingrese una lista de números separados por comas y luego ordénala
// de menor a mayor.



//---- [] ----- {} ------ `` -------------------------------------------------------------

// Contador de letras repetidas:
// Solicita al usuario que ingrese una cadena de texto y cuenta cuántas veces aparece 
// cada letra en ella. Muestra los resultados en orden alfabético.



//---- [] ----- {} ------ `` -------------------------------------------------------------