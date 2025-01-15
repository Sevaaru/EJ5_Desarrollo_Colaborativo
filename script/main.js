let totalScore = 0;

function submitAnswer(button) {
    const questionDiv = button.closest('.question');
    const type = questionDiv.dataset.type;
    const correctAnswers = questionDiv.dataset.correct.split(',').map(Number);
    const selectedAnswers = [];

    // Obtener respuestas seleccionadas
    if (type === "radio") {
        const selected = questionDiv.querySelector('input[type="radio"]:checked');
        if (selected) selectedAnswers.push(Number(selected.value));
    } else if (type === "checkbox") {
        questionDiv.querySelectorAll('input[type="checkbox"]:checked').forEach(input => {
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
        resultDiv.textContent = correctAnswers.join(', ');
        resultDiv.style.color = "red";
    }

    // Desactivar el botón después de responder
    button.disabled = true;
    resultDiv.style.fontWeight = "bold";
}






function calculateFinalScore() {
    const finalScoreDiv = document.querySelector('.final-score');
    finalScoreDiv.textContent = `Tu nota final es: ${totalScore.toFixed(2)}`;
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