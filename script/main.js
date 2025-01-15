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
        totalScore += 1;
    } else {
        resultDiv.textContent = "Incorrecto";
        resultDiv.style.color = "red";
        totalScore -= 0.25;
    }
}