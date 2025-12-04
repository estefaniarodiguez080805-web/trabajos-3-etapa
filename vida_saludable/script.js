const consejos = [
    "Toma al menos 2 litros de agua al día",
    "Haz ejercicio 30 minutos diarios",
    "Come más frutas y verduras",
    "Duerme entre 7 y 8 horas cada noche",
    "Evita bebidas azucaradas",
    "Reduce el estrés haciendo actividades que disfrutes"
];

document.getElementById("cambiarTexto").addEventListener("click", function () {
    const aleatorio = Math.floor(Math.random() * consejos.length);
    document.getElementById("miParrafo").textContent = "✅ " + consejos[aleatorio];
});

document.getElementById("validarBtn").addEventListener("click", function () {
    const habito = document.getElementById("habito").value;
    const mensaje = document.getElementById("mensaje");

    if (habito === "") {
        mensaje.textContent = "❌ Debes escribir un hábito saludable.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "✅ ¡Excelente! Has comenzado con un hábito saludable.";
        mensaje.style.color = "green";
    }
});
