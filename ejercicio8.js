function esPar(numero){
    if(numero % 2 == 0){
        return "par";
    }
    else{
        return "impar";
    }
}

var numero = parseInt(prompt("Introduce un número entero: "));
var resultado = esPar(numero);
console.log("El número " + numero + " es " + resultado + ".");