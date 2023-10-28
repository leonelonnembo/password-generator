document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generate");
    const passwordInput = document.getElementById("password");

    generateButton.addEventListener("click", function() {
        const length = 12; // Longitud de la contraseña
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?"; // Caracteres permitidos
        let password = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset.charAt(randomIndex);
        }

        passwordInput.value = password;
    });
});
