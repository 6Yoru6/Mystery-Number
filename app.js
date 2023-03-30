//Site choose a secret number to guess
let secretNumber = Math.floor(Math.random() * 10) + 1;
let remainingTries = 3;

function check() {
	const guessInput = document.getElementById("guess");
	const resultDiv = document.getElementById("result");
	const guess = parseInt(guessInput.value);

    //Error message if user choose unvalid number
	if (isNaN(guess) || guess < 1 || guess > 10 || /^\d*\.\d+$/.test(guess)) {
        alert("Veuillez saisir un nombre valide entre 1 et 10.");
        return;
    }

	if (guess === secretNumber) { //Win message
		resultDiv.innerHTML = `Bravo ! Vous avez gagné en ${4 - remainingTries} essai(s). Le nombre secret était ${secretNumber}.`;
		document.getElementById("reset").style.display = "block";
		document.getElementById("guess").disabled = true;
		document.getElementById("guess").value = "";
	} else { //Wrong number message
		remainingTries = remainingTries - 1;
		if (remainingTries > 0 && guess > secretNumber) {
			resultDiv.innerHTML = `Raté. Le nombre secret est plus petit. Il vous reste ${remainingTries} essai(s).`;
		} else if (remainingTries > 0 && guess < secretNumber) {
            resultDiv.innerHTML = `Raté. Le nombre secret est plus grand. Il vous reste ${remainingTries} essai(s).`;
            } else { //Loose message
                resultDiv.innerHTML = `Perdu ! Il ne vous reste plus d'essais. Le nombre secret était ${secretNumber}.`;
                document.getElementById("reset").style.display = "block";
                document.getElementById("guess").disabled = true;
                document.getElementById("guess").value = "";
            }
	}
}

//Button reset for restart the game
function reset() {
	secretNumber = Math.floor(Math.random() * 10) + 1;
	remainingTries = 3;
	document.getElementById("result").innerHTML = "";
	document.getElementById("reset").style.display = "none";
	document.getElementById("guess").disabled = false;
}