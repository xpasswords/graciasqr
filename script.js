
let attemptCount = 0;

function goToPage2() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
}

function checkPassword() {
    const password = document.getElementById("password").value.toUpperCase();

    if (password === "FRECUENCIA") {
        // Contraseña correcta: mostrar la página correcta
        document.getElementById("page2").classList.add("hidden");
        document.getElementById("page3").classList.remove("hidden");
    } else {
        // Contraseña incorrecta: incrementar el contador de intentos
        attemptCount++;

        if (attemptCount >= 3) {
            // Mostrar mensaje de error después de 3 intentos fallidos
            document.getElementById("errorMessage").classList.remove("hidden");
        }

        if (password === "ACEFINRU" || password === "ACCEEFINRU" || password === "CEFINRUA" || password === "EFINRUAC" || password === "FINRUACE" || password === "INRUACEF" || password === "NRUACEFI" || password === "RUACEFIN" || password === "UACEFINR") {
            // Combinación incorrecta pero en orden diferente
            document.getElementById("page2").classList.add("hidden");
            document.getElementById("pageWrongOrder").classList.remove("hidden");
        } else {
            // Otras contraseñas incorrectas
            document.getElementById("page2").classList.add("hidden");
            document.getElementById("pageIncorrect").classList.remove("hidden");
        }
    }
}

function retryPassword() {
    document.getElementById("password").value = "";
    document.getElementById("pageWrongOrder").classList.add("hidden");
    document.getElementById("pageIncorrect").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
}
function sueno() {
  window.location.href = "https://drive.google.com/file/d/1dU7Eu839S4txNgHAgNpbwa0y-I9PnAzv/view?usp=sharing";
}
