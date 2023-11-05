var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y',
 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 
 'H', 'L', 'C', 'K', 'E', 'T'];

 // Solicitar al usuario el número de DNI y la letra del DNI
var numeroDNI = parseInt(prompt("Introduce el número de DNI (sin letra):"));
var letraUsuario = prompt("Introduce la letra del DNI (en mayúsculas):");

// Comprobar si el número de DNI es válido y calcular la letra
if (numeroDNI >= 0 && numeroDNI <= 99999999) {
  var resto = numeroDNI % 23;
  var letraCalculada = letras[resto];

  // Comprobar si la letra indicada por el usuario coincide con la letra calculada
  if (letraUsuario === letraCalculada) {
    console.log("El número y la letra del DNI son correctos.");
  } else {
    console.log("La letra que has indicado no es correcta.");
  }
} else {
  console.log("El número de DNI no es válido.");
}
