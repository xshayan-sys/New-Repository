// practice Qs02
// create a game were you start with any raindom game number. ask the user to keep guessing the game number until the user guesses the correct value.

let gameNum = 1;
let userNum = prompt("Guess the correct number :")
let result = "congratulations! you have guessed the correct number";

while(userNum != gameNum) {
    userNum = prompt("you guessed the wrong number, try again :")
}

document.getElementById("i").innerHTML = result;