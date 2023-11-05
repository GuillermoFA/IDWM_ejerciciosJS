function anade() {
    // Crea un nuevo elemento li
    var nuevoElemento = document.createElement('li');
    
    // Crea un nuevo nodo de texto con el contenido deseado
    var nuevoTexto = document.createTextNode('Nuevo elemento de la lista');
    
    // Agrega el nodo de texto al nuevo elemento li
    nuevoElemento.appendChild(nuevoTexto);
    
    // Obtiene la lista existente por su ID
    var lista = document.getElementById('lista');
    
    // Agrega el nuevo elemento li a la lista
    lista.appendChild(nuevoElemento);
  }