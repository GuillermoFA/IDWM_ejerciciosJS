var numeroDeEnlaces = document.getElementsByTagName('a').length;
console.log("Número de enlaces de la página: " + numeroDeEnlaces);

var enlaces = document.getElementsByTagName('a');
if(enlaces.length >=2){
    var penultimoEnlace = enlaces[enlaces.length - 2].getAttribute('href');
    console.log("Dirección a la que enlaza el penúltimo enlace: " + penultimoEnlace);
}

var enlacesAHttpPrueba = document.querySelectorAll('a[href="http://prueba/"]').length;
console.log("Número de enlaces que enlazan a http://prueba: " + enlacesAHttpPrueba);

var tercerParrafo = document.getElementsByTagName('p')[2];
if (tercerParrafo) {
  var enlacesEnTercerParrafo = tercerParrafo.getElementsByTagName('a').length;
  console.log("Número de enlaces del tercer párrafo: " + enlacesEnTercerParrafo);
}