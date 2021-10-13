// Ejercicio 1

let nombre = prompt("Escriba su nombre: ");

alert("Hola " + nombre.toLowerCase() + ", como estas?");
alert("Hola " + nombre.toUpperCase() + ", como estas?");

// Ejercicio 2

/*

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let suma;
let resta;
suma = num1 + num2;
alert("La suma de los numero es: " + suma);
if (num1 > num2) {
  resta = num1 - num2;
  alert("La resta de los numeros es: " + resta);
} else {
  resta = num2 - num1;
  alert("La resta de los numeros es: " + resta);
}

// Ejercicio 3

let texto = prompt("Ingrese un texto");
let respuesta = confirm("Quiere ver el texto en una alerta?");
if (respuesta === true) {
    alert(texto.toUpperCase());
}
else if (respuesta === false){
    console.log(texto.toUpperCase());
}

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


// Ejercicio 5

let operacion = parseInt(
  prompt(
    "¿Que operacion desea realizar? \n 0- Terminar \n 1- Sumar \n 2- Restar \n 3- Multiplicar \n 4- Dividir \n 5- Potenciar"
  )
);
do {
  let num1 = parseInt(prompt("Ingrese el primer numero"));
  let num2 = parseInt(prompt("Ingrese el segundo numero"));

  switch (operacion) {
    case 1:
      var suma = num1 + num2;
      console.log("El resultado de la operacion de suma es: " + suma);
      break;
    case 2:
      var resta = num1 - num2;
      console.log("El resultado de la operacion de resta es: " + resta);
      break;
    case 3:
      var multiplicacion = num1 * num2;
      console.log(
        "El resultado de la operacion de multiplicacion es: " + multiplicacion
      );
      break;
    case 4:
      var division = num1 / num2;
      console.log("El resultado de la operacion de division es: " + division);
      break;
    case 5:
      var potencia = num1 ** num2;
      console.log("El resultado de la operacion de potencia es: " + potencia);
      break;
    default:
      console.log("Lo escrito es incorrecta");
      break;
  }
  operacion = parseInt(
    prompt(
      "Que operacion desea realizar? \n 0- Terminar \n 1- Sumar \n 2- Restar \n 3- Multiplicar \n 4- Dividir \n 5- Potenciar"
    )
  );
} while (operacion != 0);

// Ejercicio 6

var salir = 'n';
var alumnos = [];
do{
     let name = prompt('Ingrese el nombre de un alumno');
    if (name != null) {
        alumnos.push(name);
    }
    var seguir = confirm('Quiere ingresar mas alumnos?')
    if (seguir == true) {
        salir = 'y';
    }else {
        salir = 'n';
    }
}while (salir != 'n')
console.log(alumnos);

// Ejercicio 7

const nombres = [
  "goku",
  "mario",
  "melchor",
  "mafalda",
  "cacho",
  "hermione",
  "tony",
  "pappo",
  "leia",
  "homero",
];

*/