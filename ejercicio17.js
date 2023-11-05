// Obtén todos los enlaces de la página
var enlaces = document.querySelectorAll('a');

// Recorre los enlaces y agrega un evento de clic a cada uno
enlaces.forEach(function (enlace) {
  enlace.addEventListener('click', function (event) {
    // Evita que el enlace cambie la URL
    event.preventDefault();

    // Encuentra el párrafo relacionado al enlace
    var parrafo = this.parentNode.querySelector('p');

    // Verifica si el párrafo está oculto
    if (parrafo.style.display === 'none' || parrafo.style.display === '') {
      // Muestra el párrafo
      parrafo.style.display = 'block';
      // Cambia el texto del enlace
      this.textContent = 'Ocultar contenidos';
    } else {
      // Oculta el párrafo
      parrafo.style.display = 'none';
      // Cambia el texto del enlace
      this.textContent = 'Mostrar contenidos';
    }
  });
});