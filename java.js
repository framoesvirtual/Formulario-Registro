document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre");
    let cif = document.getElementById("cif");
    let telefono = document.getElementById("telefono");
    let mensaje = document.getElementById("mensaje");

    let nombreError = document.getElementById("nombreError");
    let cifError = document.getElementById("cifError");
    let telefonoError = document.getElementById("telefonoError");
    let mensajeError = document.getElementById("mensajeError");

    let valid = true;

    // Validación Nombre
    if (nombre.value.trim() === "") {
        nombreError.textContent = "El nombre es obligatorio";
        valid = false;
    } else {
        nombreError.textContent = "";
    }

    // Validación CIF
    let cifPattern = /^[0-9]{8}[A-Za-z]$/;
    if (!cifPattern.test(cif.value)) {
        cifError.textContent = "El CIF debe contener 8 números y una letra";
        valid = false;
    } else {
        cifError.textContent = "";
    }

    // Validación Teléfono
    let telefonoPattern = /^[0-9]{9}$/;
    if (!telefonoPattern.test(telefono.value)) {
        telefonoError.textContent = "El teléfono debe contener 9 dígitos";
        valid = false;
    } else {
        telefonoError.textContent = "";
    }

    // Validación Mensaje
    if (mensaje.value.trim() === "") {
        mensajeError.textContent = "El mensaje es obligatorio";
        valid = false;
    } else {
        mensajeError.textContent = "";
    }

    if (valid) {
        alert("Formulario enviado con éxito");
        this.reset();
    }
});