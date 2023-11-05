function esPalindromo(cadena) {
    cadena = cadena.replace(/ /g, '').toLowerCase();
    var cadenaInvertida = cadena.split('').reverse().join('');
    return cadena === cadenaInvertida;
  }
  var texto = "Anita lava la tina";
  var resultado = esPalindromo(texto);
  if (resultado) {
    console.log("La cadena es un palíndromo.");
  } else {
    console.log("La cadena no es un palíndromo.");
  } 