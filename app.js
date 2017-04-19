// VARIABLES
var playerChoice;
var compChoice;
var draw;


// GAME
function gameManager(){
    computerChoice();
    compareChoices();
};


// PLAY USER CHOICE
function play(choice) {
    playerChoice = choice;
    gameManager();
};


// RANDOM COMPUTER CHOICE
function computerChoice() {
    var getComputerNumber =  Math.floor(Math.random() * 3) + 1;

    if (getComputerNumber == 1){
    return 'rock';
    } else if (getComputerNumber == 2){
        return 'scissors';
    } else if (getComputerNumber == 3){
        return 'paper';
    } else {
        return 'rock';
    }
};


// COMPARE THE CHOICES
function compareChoices(){
    compChoice = computerChoice();
    var winner;

if (playerChoice == 'paper' && compChoice == 'rock'){
    winner = playerChoice;
    displayResult(winner);
    } else if (playerChoice == 'paper' && compChoice == 'scissors'){
    winner = compChoice;
    displayResult(winner);
    } else if (playerChoice == 'paper' && compChoice == 'paper') {
    winner = draw;
    displayResult(draw);
    } else if (playerChoice == 'scissors' && compChoice == 'paper') {
    winner = playerChoice;
    displayResult(winner);
    } else if (playerChoice == 'scissors' && compChoice == 'rock') {
    winner = compChoice;
    displayResult(winner);
    } else if (playerChoice == 'scissors' && compChoice == 'scissors') {
    winner = draw;
    displayResult(draw);
    } else if (playerChoice == 'rock' && compChoice == 'paper') {
    winner = compChoice;
    displayResult(winner);
    } else if (playerChoice == 'rock' && compChoice == 'scissors'){
    winner = playerChoice;
    displayResult(winner);
    } else if (playerChoice == 'rock' && compChoice == 'rock') {
    winner = draw;
    displayResult(draw);
    }
};


// DISPLAY
function displayResult(result){
    if (result == playerChoice){
     document.getElementById("display-winner").innerText = "You win!";
    } else if (result == compChoice){
     document.getElementById("display-loser").innerText = "Sorry, you lose!";
    } else if (result == draw) {
    document.getElementById("display-draw").innerText = "It's a draw!";
    } else if (result == 'clear') {
    document.getElementById("display-winner").innerText = " ";
    document.getElementById("display-loser").innerText = " ";
    document.getElementById("display-draw").innerText = " "; }
};


//RESET
function reset(clear) {
    playerChoice = '';
    compChoice = '';
    draw = '';
    displayResult('clear');
};


