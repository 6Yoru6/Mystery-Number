let secretNumber = Math.floor(Math.random() * 10) + 1;
let remainingTries = 3;

function check() {
	const guessInput = document.getElementById("guess");
	const resultDiv = document.getElementById("result");
	const guess = parseInt(guessInput.value);

	if (isNaN(guess) || guess < 1 || guess > 10) {
		alert("Veuillez saisir un nombre valide entre 1 et 10.");
		return;
	}

	if (guess === secretNumber) {
		resultDiv.innerHTML = `Bravo ! Vous avez gagné en ${4 - remainingTries} essai(s).`;
		document.getElementById("reset").style.display = "block";
		document.getElementById("guess").disabled = true;
		document.getElementById("guess").value = "";
	} else {
		remainingTries = remainingTries - 1;
		if (remainingTries > 0 && guess > secretNumber) {
			resultDiv.innerHTML = `Raté. Le nombre secret est plus petit. Il vous reste ${remainingTries} essai(s).`;
		} else if (remainingTries > 0 && guess < secretNumber) {
            resultDiv.innerHTML = `Raté. Le nombre secret est plus grand. Il vous reste ${remainingTries} essai(s).`;
            } else {
                resultDiv.innerHTML = `Perdu ! Il ne vous reste plus d'essais. Le nombre secret était ${secretNumber}.`;
                document.getElementById("reset").style.display = "block";
                document.getElementById("guess").disabled = true;
                document.getElementById("guess").value = "";
            }
	}
}

function reset() {
	secretNumber = Math.floor(Math.random() * 10) + 1;
	remainingTries = 3;
	document.getElementById("result").innerHTML = "";
	document.getElementById("reset").style.display = "none";
	document.getElementById("guess").disabled = false;
}