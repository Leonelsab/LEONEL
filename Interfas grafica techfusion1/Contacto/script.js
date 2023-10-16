// script.js
document.addEventListener("DOMContentLoaded", function() {
    const empresasTab = document.getElementById("empresasTab");
    const agronomosTab = document.getElementById("agronomosTab");
    const empresasContent = document.getElementById("empresasContent");
    const agronomosContent = document.getElementById("agronomosContent");
    const commentInput = document.getElementById("commentInput");
    const submitComment = document.getElementById("submitComment");
    const comments = document.getElementById("comments");

    // Mostrar contenido de Empresas al hacer clic en la pestaña de Empresas
    empresasTab.addEventListener("click", function() {
        empresasContent.style.display = "block";
        agronomosContent.style.display = "none";
    });

    // Mostrar contenido de Agrónomos al hacer clic en la pestaña de Agrónomos
    agronomosTab.addEventListener("click", function() {
        agronomosContent.style.display = "block";
        empresasContent.style.display = "none";
    });

    // Manejar el envío de comentarios
    submitComment.addEventListener("click", function() {
        const commentText = commentInput.value;
        if (commentText) {
            const commentElement = document.createElement("div");
            commentElement.className = "comment";
            commentElement.textContent = commentText;
            comments.appendChild(commentElement);
            commentInput.value = "";
        }
    });
});

// Manejar el evento al seleccionar un cultivo y hacer clic en "Obtener Asesoramiento"
const cultivoSelect = document.getElementById("cultivo");
const obtenerConsejoBtn = document.getElementById("obtenerConsejo");
const resultadoDiv = document.getElementById("resultado");

obtenerConsejoBtn.addEventListener("click", function() {
    const selectedCultivo = cultivoSelect.value;
    // Lógica para obtener asesoramiento según el cultivo seleccionado
    // Puedes agregar aquí la lógica para mostrar el resultado en el elemento resultadoDiv
});


document.getElementById('obtenerConsejo').addEventListener('click', function() {
    var cultivo = document.getElementById('cultivo').value;
    var consejo = obtenerConsejo(cultivo);
    document.getElementById('resultado').innerText = `Consejo para ${cultivo}: ${consejo}`;
});

function obtenerConsejo(cultivo) {
    // Aquí puedes agregar la lógica para obtener el consejo según el cultivo seleccionado
    // Por ejemplo, podrías tener un objeto con consejos para cada tipo de cultivo
    var consejos = {
        'maiz': 'Riego regular y suelo bien drenado son esenciales para el maíz.',
        'trigo': 'El trigo necesita mucho sol y suelo fértil para crecer bien.',
        'arroz': 'El arroz necesita agua constante para crecer. Asegúrate de tener un sistema de riego adecuado.'
    };

    return consejos[cultivo] || 'Lo siento, no se encontró consejo para este cultivo.';
}