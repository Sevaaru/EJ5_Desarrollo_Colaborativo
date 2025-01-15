let totalScore = 0;

function submitAnswer(button) {
    const questionDiv = button.closest('.question');
    const type = questionDiv.dataset.type;
    const correctAnswers = questionDiv.dataset.correct.split(',').map(Number);
    const selectedAnswers = [];

    // Obtener respuestas seleccionadas
    if (type === "radio") {
        const selected = questionDiv.querySelector('input[type="radio"]:checked');
        if (!selected) {
            alert("Es obligatorio seleccionar una opción.");
            return;
        }
        selectedAnswers.push(Number(selected.value));
    } else if (type === "checkbox") {
        const selectedCheckboxes = questionDiv.querySelectorAll('input[type="checkbox"]:checked');
        if (selectedCheckboxes.length === 0) {
            alert("Es obligatorio seleccionar al menos una opción.");
            return;
        }
        selectedCheckboxes.forEach(input => {
            selectedAnswers.push(Number(input.value));
        });
    }

    const resultDiv = questionDiv.querySelector('.result');

    // Validar respuestas
    if (JSON.stringify(selectedAnswers.sort()) === JSON.stringify(correctAnswers.sort())) {
        resultDiv.textContent = "Correcto";
        resultDiv.style.color = "green";
    } else {
        // Mostrar solo los números de las respuestas correctas
        const correctNumbers = correctAnswers.map(num => num + 1); // Convertir índice a 1, 2, 3...
        resultDiv.textContent = correctNumbers.join(', ');
        resultDiv.style.color = "red";
    }

    // Desactivar el botón después de responder
    button.disabled = true;
    resultDiv.style.fontWeight = "bold";
}



function calculateFinalScore() {
    const finalScoreDiv = document.querySelector('.final-score');
    finalScoreDiv.textContent = `Tu nota final es: ${finalScore.toFixed(2)}`;

    // Cambiar color de fondo según la nota
    if (finalScore >= 5) {
        document.body.style.backgroundColor = '#90EE90'; // Verde claro
        finalScoreDiv.innerHTML += '<br>¡Felicidades! Has aprobado! 🎉';
    } else {
        document.body.style.backgroundColor = '#FFB6B6'; // Rojo claro
        finalScoreDiv.innerHTML += '<br>Lo siento, necesitas mejorar 😢';
    }
}

function resetAnswer(button) {
    const questionDiv = button.closest('.question');
    questionDiv.querySelectorAll('input[type="radio"]').forEach(input => {
        input.checked = false;
    });
    questionDiv.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.checked = false;
    });
    questionDiv.querySelector('.result').textContent = "";
}