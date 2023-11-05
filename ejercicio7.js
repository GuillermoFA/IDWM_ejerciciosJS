// Solicitar al usuario el número entero para calcular su factorial
var numero = parseInt(prompt("Introduce un número entero para calcular su factorial:"));

// Verificar si el número es negativo (factorial de números negativos no está definido)
if (numero < 0) {
  console.log("El factorial de números negativos no está definido.");
} else {
  // Inicializar una variable para almacenar el resultado del factorial
  var factorial = 1;

  // Calcular el factorial usando un bucle for
  for (var i = 1; i <= numero; i++) {
    factorial *= i;
  }

  // Mostrar el resultado del factorial
  console.log("El factorial de " + numero + " es " + factorial);
}