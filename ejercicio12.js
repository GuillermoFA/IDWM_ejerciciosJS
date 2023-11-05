var resultados = new Array(12).fill(0);

// Función para simular el lanzamiento de dos dados y registrar el resultado
function lanzarDados() {
  var dado1 = Math.floor(Math.random() * 6) + 1;
  var dado2 = Math.floor(Math.random() * 6) + 1;
  var suma = dado1 + dado2;
  resultados[suma - 2]++;
}

// Realizar 36,000 lanzamientos de dados
for (var i = 0; i < 36000; i++) {
  lanzarDados();
}

// Mostrar los resultados
for (var suma = 2; suma <= 12; suma++) {
  console.log("Suma " + suma + ": " + resultados[suma - 2] + " apariciones");
}