var expresionRegular = /\b\d{2}\/\d{2}\/\d{4}\b/;
var cadena = "Nací el 05/04/1982 en Donostia.";

if (expresionRegular.test(cadena)) {
  console.log("La cadena contiene una fecha válida en formato XX/XX/XXXX.");
} else {
  console.log("La cadena no contiene una fecha válida en formato XX/XX/XXXX.");
}

var expresionRegular2 = /^[A-Za-z0-9.-]+@[A-Za-z0-9]+\.[A-Za-z]{2,3}$/;
var email = "usuario@example.com";

if (expresionRegular2.test(email)) {
  console.log("La dirección de correo electrónico es válida.");
} else {
  console.log("La dirección de correo electrónico no es válida.");
}

function escapeHTML(text) {
    var replacements = [
      ["&", "&amp;"],
      ["\"", "&quot;"],
      ["<", "&lt;"],
      [">", "&gt;"]
    ];
  
    replacements.forEach(function(replace) {
      var regex = new RegExp(replace[0], 'g');
      text = text.replace(regex, replace[1]);
    });
  
    return text;
  }

var nombreApellido = "John Smith";
var expresionRegular = /(\w+)\s(\w+)/;
var resultado = nombreApellido.replace(expresionRegular, "$2, $1");

console.log(resultado); // Mostrará "Smith, John"

var cadenaHTML = '<p>Este es un ejemplo de <script>alert("¡Hola, soy un script malicioso!");</script> cadena HTML.</p>';
var expresionRegular3 = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
var resultado = cadenaHTML.replace(expresionRegular3, '');

console.log(resultado);