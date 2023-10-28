document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generate");
    const generatedPasswordInput = document.getElementById("generated-password");
    const validatePasswordInput = document.getElementById("validated-password");
    const fortalezaText = document.getElementById("fortaleza");

    generateButton.addEventListener("click", function() {
        const length = 12; // Longitud de la contraseña
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?"; // Caracteres permitidos
        let password = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset.charAt(randomIndex);
        }

        generatedPasswordInput.value = password;
    });

    validatePasswordInput.addEventListener("input", function() {
        const contrasena = validatePasswordInput.value;
        const fortaleza = validarFortalezaContrasena(contrasena);

        // Muestra el mensaje de fortaleza en tiempo real
        if (fortaleza === "Fuerte") {
            fortalezaText.style.color = "green";
        } else if (fortaleza === "Moderada") {
            fortalezaText.style.color = "orange";
        } else {
            fortalezaText.style.color = "red";
        }

        fortalezaText.textContent = "Fortaleza de la contraseña: " + fortaleza;
    });
});

function validarFortalezaContrasena(contrasena) {
    // Verifica la longitud de la contraseña
    if (contrasena.length < 8) {
        return "Débil (demasiado corta)";
    }

    // Verifica la presencia de letras mayúsculas
    if (!/[A-Z]/.test(contrasena)) {
        return "Débil (falta letra mayúscula)";
    }

    // Verifica la presencia de letras minúsculas
    if (!/[a-z]/.test(contrasena)) {
        return "Débil (falta letra minúscula)";
    }

    // Verifica la presencia de números
    if (!/[0-9]/.test(contrasena)) {
        return "Débil (falta número)";
    }

    // Verifica la presencia de caracteres especiales
    if (!/[^A-Za-z0-9]/.test(contrasena)) {
        return "Débil (falta caracter especial)";
    }

    // Si pasa todas las verificaciones, la contraseña se considera fuerte
    return "Fuerte";
}
