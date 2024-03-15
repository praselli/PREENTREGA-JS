// Cadenas de caracteres que se utilizarán para la contraseña.

const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%&-";


// Función que genera una contraseña aleatoria basada en las opciones proporcionadas.

function generarContrasenia(cantidadDeCaracteres, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos) {
    let caracteres = "";
    // Construye la cadena de caracteres que se utilizarán para generar la contraseña.
    if (incluirMayusculas) caracteres += letrasMayusculas;
    if (incluirMinusculas) caracteres += letrasMinusculas;
    if (incluirNumeros) caracteres += numeros;
    if (incluirSimbolos) caracteres += simbolos;


// Genera la contraseña seleccionando caracteres aleatorios de las cadenas de caracteres.
   
    let contrasenia = "";
    for (let i = 0; i < cantidadDeCaracteres; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contrasenia += caracteres[indiceAleatorio];
    }
    return contrasenia;
}


// Función que solicita al usuario las opciones para generar la contraseña.

function opcionesDeContrasenia() {
    let cantidadDeCaracteres;
    // Se repite hasta que el usuario ingrese un número válido.
    do {
        cantidadDeCaracteres = parseInt(prompt("Ingrese cantidad de caracteres de la contraseña (Solo números):"));
    } while (isNaN(cantidadDeCaracteres));
    // Solicita al usuario las opciones para incluir o no ciertos tipos de caracteres a la contraseña.
    const incluirMayusculas = confirm("Incluir letras mayúsculas?");
    const incluirMinusculas = confirm("Incluir letras minúsculas?");
    const incluirNumeros = confirm("Incluir números?");
    const incluirSimbolos = confirm("Incluir símbolos?");
    return { cantidadDeCaracteres, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos };
}


// Función que genera y muestra la contraseña.

function generarYmostrarContrasenia() {
    // Obtiene las opciones del usuario.
    const opciones = opcionesDeContrasenia();
    // Genera la contraseña basada en las opciones.
    const contrasenia = generarContrasenia(opciones.cantidadDeCaracteres, opciones.incluirMayusculas, opciones.incluirMinusculas, opciones.incluirNumeros, opciones.incluirSimbolos);
    // Muestra la contraseña al usuario en un alert.
    alert("Su contraseña es:\n" + contrasenia);
    // Consologea la contraseña generada.
    console.log("Contraseña generada:", contrasenia);
}


// Inicia el proceso de generación y muestra de contraseña.
generarYmostrarContrasenia();