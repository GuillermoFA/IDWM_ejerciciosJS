const ratonBox = document.getElementById("raton");
const tecladoBox = document.getElementById("teclado");

function muestraInformacion(e) {
  let mensaje = `Tipo de evento: ${e.type}`;
  if (e.type === "mousemove" || e.type === "mousedown") {

    mensaje += `<br>Posición en la ventana: (${e.clientX}, ${e.clientY})`;
    mensaje += `<br>Posición en la página: (${e.pageX}, ${e.pageY})`;
    ratonBox.style.backgroundColor = "#FFFFCC";
    tecladoBox.style.backgroundColor = "#FFFFFF";

  } else if (e.type === "keydown") {

    mensaje += `<br>Tecla presionada: ${e.key}`;
    mensaje += `<br>Código de la tecla: ${e.keyCode}`;
    tecladoBox.style.backgroundColor = "#CCE6FF";
    ratonBox.style.backgroundColor = "#FFFFFF";

  }

  if (e.target === ratonBox) {
    ratonBox.querySelector("div").innerHTML = mensaje;
  } 
  
  if (e.target === tecladoBox) {
    tecladoBox.querySelector("div").innerHTML = mensaje;
  }
}

ratonBox.addEventListener("mousemove", muestraInformacion);
ratonBox.addEventListener("mousedown", muestraInformacion);

document.addEventListener("keydown", muestraInformacion);