// CLASE PERSONA
function Persona(nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}
Persona.prototype.obtenerDetalles = function() {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Género: " + this.genero);
}

// CLASE ESTUDIANTE
function Estudiante(nombre, edad, genero, curso, grupo){
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
}
Estudiante.prototype = Object.create(Persona.prototype); //HEREDAR PERSONA
Estudiante.prototype.registrar = function(){
    console.log("Curso: " + this.curso);
    console.log("Grupo: " + this.grupo);
}

// CLASE PROFESOR
function Profesor(nombre, edad, genero, asignatura, nivel){
    Persona.call(this,nombre,edad,genero)
    this.asignatura = asignatura;
    this.nivel = nivel;
}
Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.asignar = function(){
    console.log("Asignatura: " + this.asignatura);
    console.log("Nivel: " + this.nivel);
}

// CASOS DE PRUEBAS
var estudiante1 = new Estudiante("Guillermo", 23, "Masculino", "Programación", "Grupo A");
var profesor1 = new Profesor("RickyUrvina", 29, "Masculino", "Desarrollo web movil", "Avanzado");

console.log("Detalles del Estudiante:");
estudiante1.obtenerDetalles();
estudiante1.registrar();

console.log("\nDetalles del Profesor:");
profesor1.obtenerDetalles();
profesor1.asignar();