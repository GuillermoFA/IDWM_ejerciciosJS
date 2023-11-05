document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("registro");

    const campos = ["nombre", "apellido", "email", "password", "comentarios"];
    campos.forEach(function (campo) {
        const input = document.getElementById("registro_" + campo);
        input.addEventListener("blur", function () {
            validarCampo(input);
        });
    });

    formulario.addEventListener("submit", function (e) {
        if (!validarFormulario()) {
            e.preventDefault(); // Evitar el envío del formulario si no es válido
        }
    });

    function validarCampo(input) {
        const valor = input.value.trim();
        const campoId = input.id;
        const mensajeError = document.getElementById(campoId + "_error");
        mensajeError.textContent = ""; // Limpiar mensajes de error anteriores
        if (valor === "") {
            mensajeError.textContent = "Este campo es obligatorio.";
            return false;
        }
        if (campoId === "registro_email" && !validarEmail(valor)) {
            mensajeError.textContent = "El email no es válido.";
            return false;
        }
        if (campoId === "registro_password" && !validarPassword(valor)) {
            mensajeError.textContent = "La contraseña no cumple los requisitos.";
            return false;
        }
        if (campoId === "registro_comentarios" && valor.length > 50) {
            mensajeError.textContent = "Los comentarios no pueden superar los 50 caracteres.";
            return false;
        }
        return true;
    }

    function validarFormulario() {
        const errores = campos.filter(function (campo) {
            const input = document.getElementById("registro_" + campo);
            return !validarCampo(input);
        });
        return errores.length === 0;
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    function validarPassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        return regex.test(password);
    }
});