const options = ["Rock", "Paper", "Scissors"];
const points = [0,1,2];
const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors")
btnRock.addEventListener('click', function() {
    const humanpoints = getHumanChoice("Rock");
    updateWinner(humanpoints);
})
btnPaper.addEventListener('click', function() {
    const humanpoints = getHumanChoice("Paper");
    updateWinner(humanpoints);
})
btnScissors.addEventListener('click', function() {
    const humanpoints = getHumanChoice("Scissors")
    updateWinner(humanpoints);
}
)
function getHumanChoice(choice) {
    let humanpoints = -1;
    const displayChoice = document.getElementById('DisplayChoice');
    displayChoice.innerText = "You Chose: " + choice;
    for (let i = 0; i < options.length; i++) {
        if (choice === options[i]) {
            humanpoints = points[i];
            break;
        }
    }
    console.log("Human points:", humanpoints);
    return humanpoints;
}
function getRandInt(max) {
    return Math.floor(Math.random()*max);
}
integerchoice = getRandInt(3);
const Computerbtn = document.getElementById("Computerbtn");
function updateWinner(humanpoints) { // Function to calculate and display winner
    const displayCompChoice = document.getElementById('DisplayCompChoice');
    displayCompChoice.innerText = "Computer Chooses: " + options[integerchoice];
  
    const winner = (3 + humanpoints - integerchoice) % 3;
    const displayWinner = document.getElementById("DisplayWinner");
  
    if (winner === 0) {
      displayWinner.innerText = "A tie huh?";
    } else if (winner === 1) {
      displayWinner.innerText = "Congrats!! You've defeated the mighty computer";
    } else {
      displayWinner.innerText = "Computer Wins, better luck next time human :-p";
    }
  }
  const playAgainBtn = document.getElementById("playAgainBtn");

playAgainBtn.addEventListener('click', function() {
  integerchoice = getRandInt(3);
  document.getElementById('DisplayChoice').innerText = "";
  document.getElementById('DisplayCompChoice').innerText = ""; 
  document.getElementById('DisplayWinner').innerText = ""; 
});
