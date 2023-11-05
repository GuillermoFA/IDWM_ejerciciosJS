function muestra() {
    // Obtén el elemento con la clase "adicional"
    var adicional = document.querySelector('.adicional');
    // Obtén el enlace con la clase "enlace"
    var enlace = document.querySelector('.enlace');
  
    // Comprueba si el elemento adicional tiene la clase "oculto"
    if (adicional.classList.contains('oculto')) {
      // Muestra el elemento adicional
      adicional.classList.remove('oculto');
      // Oculta el enlace
      enlace.style.display = 'none';
    }
  }