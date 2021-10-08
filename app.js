// Ejercicio 1

let nombre = prompt("Escriba su nombre: ");

alert("Hola " + nombre.toLowerCase() + ", como estas?");
alert("Hola " + nombre.toUpperCase() + ", como estas?");

// Ejercicio 2

var primerNumero = prompt("Ingresa el primer numero: ");
var segundoNumero = prompt("Ingresa el segundo numero: ");
var resultadoSuma = parseInt(primerNumero) + parseInt(segundoNumero);
var resultadoResta = parseInt(primerNumero) - parseInt(segundoNumero);

if (primerNumero < segundoNumero) {
    let resultadoResta = segundoNumero - primerNumero;
    let resultadoSuma = primerNumero + segundoNumero;
    alert("El resultado de la resta es: " + resultadoResta);
    alert("El resultado de la suma es: " + resultadoSuma);
} else {
        resultadoResta = primerNumero - segundoNumero;
        resultadoSuma = primerNumero + segundoNumero;
        alert("El resultado de la suma es: " + resultadoSuma);
        alert("El resultado de la resta es: " + resultadoResta);
}


/*

// Ejercicio 3

let text = prompt("Ingrese un texto");
let respuesta = confirm("3333333333333333
")

// Ejercicio 4

var a = prompt("Ingrese un numero");
var b = prompt("Ingrese otro numero");
var c = parseInt(a)+parseInt(b);
var d = parseInt(a)-parseInt(b);
var e = parseInt(a)*parseInt(b);
var f = parseInt(a)/parseInt(b);

alert("Tu resultado en suma es: " + c);
alert("Tu resultado en resta es: " + d);
alert("Tu resultado en potencia es: " + e);
alert("Tu resultado en division es: " + f);

*/

// Ejercicio 5
