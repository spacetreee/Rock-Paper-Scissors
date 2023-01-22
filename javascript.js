//computer to return random rock paper scissor choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissor';
    }
}
//assign computer choice to variable
let computerSelection = getComputerChoice();

//take user input and compare user input vs computer input
function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose!' + ' Your selection:' + playerSelection + " Computer's selection: " + computerSelection;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win!' + ' Your selection:' + playerSelection + " Computer's selection: " + computerSelection;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose!' + ' Your selection:' + playerSelection + " Computer's selection: " + computerSelection;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win!' + ' Your selection:' + playerSelection + " Computer's selection: " + computerSelection;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose!' + ' Your selection:' + playerSelection + " Computer's selection: " + computerSelection;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win!' + ' Your selection:' + playerSelection + " Computer's selection: " + computerSelection;
    } else {
        return 'You tied!';
    }
}


//declare winner 

//repeat entire game for 5 rounds and keep track who won each timed