//Site choose a secret number to guess
let secretNumber = Math.floor(Math.random() * 10) + 1;
let remainingTries = 3;
let maxNumber = 10;

function check() {
	const guessInput = document.getElementById("guess");
	const resultDiv = document.getElementById("result");
	const guess = parseInt(guessInput.value);

    //Error message if user choose unvalid number
	if (isNaN(guess) || guess < 1 || guess > maxNumber || /^\d*\.\d+$/.test(guess)) {
        alert(`Veuillez saisir un nombre valide entre 1 et ${maxNumber}.`);
        return;
    }

	if (guess === secretNumber) { //Win message
		const winMessage = document.createElement("p");
		winMessage.textContent = `${guess} ? Bravo ! Vous avez gagné en ${4 - remainingTries} essai(s).`;
		winMessage.style.fontWeight = "bold"
        resultDiv.appendChild(winMessage);
        document.getElementById("tableResult").style.display = "flex";
		document.getElementById("reset").style.display = "block";
		document.getElementById("guess").disabled = true;
		document.getElementById("guess").value = "";
	} else { //Wrong number message
		remainingTries = remainingTries - 1;
		if (remainingTries > 0 && guess > secretNumber) {
			const wrongMessage1 = document.createElement("p");
			wrongMessage1.textContent = `${guess} ? Raté. Le numéro secret est plus petit. Il vous reste ${remainingTries} essai(s).`;
			resultDiv.appendChild(wrongMessage1);
            document.getElementById("tableResult").style.display = "flex";
		} else if (remainingTries > 0 && guess < secretNumber) {
            const wrongMessage2 = document.createElement("p");
			wrongMessage2.textContent = `${guess} ? Raté. Le numéro secret est plus grand. Il vous reste ${remainingTries} essai(s).`;
			resultDiv.appendChild(wrongMessage2);
            document.getElementById("tableResult").style.display = "flex";
            } else { //Loose message
                const looseMessage = document.createElement("p");
			    looseMessage.textContent = `${guess} ? Perdu ! Le numéro secret était ${secretNumber}.`;
                looseMessage.style.fontWeight = "bold"
			    resultDiv.appendChild(looseMessage);
                document.getElementById("tableResult").style.display = "flex";
                document.getElementById("reset").style.display = "block";
                document.getElementById("guess").disabled = true;
                document.getElementById("guess").value = "";
            }
	}
}

//Button reset to restart the game
function reset() {
	secretNumber = Math.floor(Math.random() * maxNumber) + 1;
	remainingTries = 3;
    document.getElementById("tableResult").style.display = "none";
	document.getElementById("result").innerHTML = "";
	document.getElementById("reset").style.display = "none";
	document.getElementById("guess").disabled = false;
    document.getElementById("guess").value = "";
}

//Change difficulty and rules
	//Button easy 
	document.getElementById("easyButton").addEventListener("click", function() {
		maxNumber = 10;
		reset();
		document.getElementById("difficultyh1").textContent = "Trouvez le numéro secret entre 1 et 10 !";
	});
	//Button medium 
	document.getElementById("mediumButton").addEventListener("click", function() {
		maxNumber = 50;
		reset();
		document.getElementById("difficultyh1").textContent = "Trouvez le numéro secret entre 1 et 50 !";
	});
	//Button hard 
	document.getElementById("hardButton").addEventListener("click", function() {
		maxNumber = 100;
		reset();
		document.getElementById("difficultyh1").textContent = "Trouvez le numéro secret entre 1 et 100 !";
	});