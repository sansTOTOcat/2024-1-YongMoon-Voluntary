document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const resultMessage = document.getElementById('result-message');
    const attemptsMessage = document.getElementById('attempts-message');

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value, 10);
        attempts++;
    
    if(userGuess == randomNumber){
        resultMessage.textContent = '';
        resultMessage.style.color;
        
    }

        attemptsMessage.textContent = `Attempts: ${attempts}`;
        guessInput.value = '';
        guessInput.focus();
    });

    function resetGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        attemptsMessage.textContent = '';
        setTimeout(() => {
            resultMessage.textContent = '';
        }, 5000);
    }
});
