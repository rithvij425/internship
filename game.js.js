function rollDice() {
    const dice = document.getElementById("dice");
    const randomNumber = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    dice.textContent = randomNumber;
}