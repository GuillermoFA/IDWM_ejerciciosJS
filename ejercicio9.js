function determinarTipoCadena(cadena){
    if(cadena == cadena.toUpperCase()){
        return "Cadena Mayúscula";
    } else if (cadena == cadena.toLowerCase()) {
        return "Minúsculas";
    } else {
        return "Mezcla de cadenas"
    }
}

var texto = "Guille"
var resultado = determinarTipoCadena(texto);
console.log("La cadena '" + texto + "' está formada por " + resultado + ".");