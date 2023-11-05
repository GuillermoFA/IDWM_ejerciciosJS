var valores = [true, 5, false, "hola", "adios", 2];

var texto1 = valores[3];
var texto2 = valores[4];

if (typeof texto1 === "string" && typeof texto2 === "string") {
  if (texto1.length > texto2.length) {
    console.log("El texto '" + texto1 + "' es mayor que '" + texto2 + "'.");
  } else if (texto2.length > texto1.length) {
    console.log("El texto '" + texto2 + "' es mayor que '" + texto1 + "'.");
  } else {
    console.log("Ambos textos tienen la misma longitud.");
  }
} else {
  console.log("Uno o ambos elementos no son cadenas de texto.");
}


var booleano1 = valores[0];
var booleano2 = valores[2];

var resultadoTrue = booleano1 && booleano2; // true && false = false
var resultadoFalse = booleano1 || booleano2; // true || false = true

console.log("Resultado True:", resultadoTrue); // Debe mostrar "false"
console.log("Resultado False:", resultadoFalse); // Debe mostrar "true"


var numero1 = valores[1];
var numero2 = valores[5];

var suma = numero1 + numero2; // Suma
var resta = numero1 - numero2; // Resta
var multiplicacion = numero1 * numero2; // Multiplicación
var division = numero1 / numero2; // División
var modulo = numero1 % numero2; // Módulo

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);