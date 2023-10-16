// script.js
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const toggleLogin = document.getElementById("toggle-login");
    const toggleRegister = document.getElementById("toggle-register");

    toggleLogin.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    toggleRegister.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    const loginFormFields = document.getElementById("login-form-fields");
    const registerFormFields = document.getElementById("register-form-fields");

    loginFormFields.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        // Aquí puedes agregar la lógica de autenticación para el inicio de sesión
        alert(`Inicio de sesión exitoso.\nUsuario: ${username}\nContraseña: ${password}`);
    });

    registerFormFields.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const nuevaContraseña = document.getElementById("nueva-contraseña").value;
        // Aquí puedes agregar la lógica de registro
        alert(`Registro exitoso.\nNombre: ${nombre}\nCorreo Electrónico: ${email}\nNueva Contraseña: ${nuevaContraseña}`);
    });
});
