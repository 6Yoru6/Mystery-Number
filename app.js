//Randomly pick a number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

let remainingTries = 3;

function check() {
  const guess = document.getElementById("guess").value;

  //Error message if the user write an unvalid number between 1 and 10
  if (isNaN(guess) || guess < 1 || guess > 10 || guess.indexOf(".") !== -1) {
    alert("Vous avez selectionné un nombre invalide, prenez un nombre entier entre 1 et 10");
    return;
  }

  //Reduce tries remaining when enter a wrong number to guess
  remainingTries = remainingTries - 1

  //Check if the number is the same as secretNumber and display result
  if (guess == secretNumber) {
    document.getElementById("result").innerHTML = "Bravo ! Vous avez trouvé le bon nombre avec " + (3 - remainingTries) + " essai(s) !";
    return;
  } else if (remainingTries == 0) {
    document.getElementById("result").innerHTML = "Perdu ! Il ne vous reste plus d'essais. Le nombre secret était " + secretNumber + ".";
    return;
  } else {
    document.getElementById("result").innerHTML = "Dommage, ce n'est pas le bon nombre. Il vous reste " + remainingTries + " essai(s) restant(s).";
    return;
  }
}