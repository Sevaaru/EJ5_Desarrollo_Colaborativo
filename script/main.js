let totalScore = 0;

function submitAnswer(button) {
    const questionDiv = button.closest('.question');
    const type = questionDiv.dataset.type;
    const correctAnswers = questionDiv.dataset.correct.split(',').map(Number);
    const selectedAnswers = [];

    if (type === "radio") {
        const selected = questionDiv.querySelector('input[type="radio"]:checked');
        if (selected) selectedAnswers.push(Number(selected.value));
    } else if (type === "checkbox") {
        questionDiv.querySelectorAll('input[type="checkbox"]:checked').forEach(input => {
            selectedAnswers.push(Number(input.value));
        });
    }

    const resultDiv = questionDiv.querySelector('.result');
    if (JSON.stringify(selectedAnswers.sort()) === JSON.stringify(correctAnswers.sort())) {
        resultDiv.textContent = "Correcto";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "Incorrecto";
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