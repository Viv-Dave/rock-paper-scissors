const options = ["Rock", "Paper", "Scissors"];
const points = [0,1,2];
var userChoice = prompt("Choice: ");
var humanpoints = -1 ;

for (let i = 0; i < options.length; i++) {
    if (userChoice == options[i]) {
        humanpoints = points[i];
        break;
    }
}
console.log("Human choice: " + userChoice);
function getRandInt(max) {
    return Math.floor(Math.random()*max);
}
integerchoice = getRandInt(3);
console.log("Computer choice: " + options[integerchoice]);
winner = (3+humanpoints-integerchoice)%3;
if (winner == 2) {
    console.log("COMPUTER WINS!")
}
else if (winner == 1) {
    console.log("HUMAN WINS!")
}
else if (winner == 0) {
    console.log("Tie")
}