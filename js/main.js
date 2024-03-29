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


//-------------------------------------------------------------------------------------------------------

// Suma de números pares e impares:

// Crea un array con una serie de números.
// Utiliza un bucle for para recorrer cada número del array.
// Calcula la suma de todos los números pares y la suma de todos los números impares por separado.
// Muestra los resultados en la consola.

const serieNumerica = [9, 23, 60, 4, 33, 27, 48, 50, 19, 7];

const numerosPares = [];
const numerosImpares = [];

for (let i = 0; i < serieNumerica.length; i++) {
   
    if (serieNumerica[i] % 2 === 0) {
        numerosPares.push (serieNumerica[i]);
        }
    else {
        numerosImpares.push (serieNumerica[i]);
    }
    };

console.log (numerosPares);
console.log (numerosImpares);

// falta terminar!!!!!!!!!!


//-------------------------------------------------------------------------------------------------------

// Cálculo de la potencia de un número:

// Pide al usuario que ingrese un número.
// Utiliza un bucle for para calcular la potencia de ese número elevado a la potencia de los números del 1 al 10.
// Muestra los resultados en la consola.




//-------------------------------------------------------------------------------------------------------

// Inversión de una cadena de texto:

// Pide al usuario que ingrese una cadena de texto.
// Utiliza un bucle for para recorrer la cadena de texto al revés.
// Construye una nueva cadena que sea la inversa de la cadena original.
// Muestra la cadena invertida en la consola.




//-------------------------------------------------------------------------------------------------------

// Contador de letras:

// Pide al usuario que ingrese una palabra o frase.
// Utiliza un bucle for para contar la cantidad de veces que aparece cada letra en la palabra o frase.
// Muestra los resultados en la consola.




//-------------------------------------------------------------------------------------------------------

// Generador de secuencia numérica:

// Pide al usuario que ingrese un número inicial y un número final.
// Utiliza un bucle for para generar una secuencia numérica que vaya desde el número inicial hasta el número final.
// Muestra la secuencia generada en la consola.




//-------------------------------------------------------------------------------------------------------
