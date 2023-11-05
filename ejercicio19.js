var box = document.querySelector('.box');

// Agregamos un escuchador de eventos click a la ventana del navegador
window.addEventListener('click', function(event) {
    // Obtenemos el tamaño de la ventana del navegador
    var tamanoVentana = tamanoVentanaNavegador();
    
    // Obtenemos las coordenadas X e Y del evento del ratón
    var posX = event.clientX;
    var posY = event.clientY;
    
    // Determinamos en qué zona hizo clic el usuario
    var zona = '';

    if (posX < tamanoVentana[0] / 2) {
        zona += 'izquierda ';
    } else {
        zona += 'derecha ';
    }

    if (posY < tamanoVentana[1] / 2) {
        zona += 'arriba';
    } else {
        zona += 'abajo';
    }

    // Actualizamos el contenido del elemento "posicion" con la zona
    box.querySelector('.posicion').textContent = zona;
});

const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");

mensaje.addEventListener("input", actualizarContador);

function actualizarContador() {
    const maxCaracteres = parseInt(mensaje.getAttribute("maxlength"));
    const caracteresRestantes = maxCaracteres - mensaje.value.length;
    contador.textContent = `Caracteres restantes: ${caracteresRestantes}`;
}

mensaje.addEventListener("keydown", function (e) {
    const teclasPermitidas = [8, 46, 37, 39]; // Backspace, Supr, flecha izquierda, flecha derecha
    if (teclasPermitidas.indexOf(e.keyCode) === -1 && mensaje.value.length >= mensaje.maxLength) {
        e.preventDefault();
    }
});