//computer to return random rock paper scissor choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

const div = document.querySelector('div');

//take user input and compare user input vs computer input and declare result
function playRound(playerSelection, computerSelection) {
    //make player's entry case insensitive
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    let winner;
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        winner = 'computer';
        return winner;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        winner = 'player';
        return winner;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        winner = 'computer';
        return winner;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        winner = 'player';
        return winner;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        winner = 'computer';
        return winner;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        winner = 'player';
        return winner;
    } else {
        winner = 'No one';
        return winner;
    }
}

let playerWinTally = 0;
let computerWinTally = 0;
let roundResult;

const buttons = document.querySelectorAll('button');
buttons.forEach( button => {
    button.addEventListener('click', () => listenerAction(button, getComputerChoice()));
})

function listenerAction(button, computerSelection) {
    roundResult = playRound(button.id, computerSelection);
    tally(roundResult);
    gameWinner = declareWinner(playerWinTally, computerWinTally);
    const tallyContainer = document.querySelector('#tally');
    const tallyMessage = document.createElement('div');
    tallyMessage.textContent = 'Your score is ' + playerWinTally + ' and computer\'s score is ' + computerWinTally;
    tallyContainer.append(tallyMessage);
    const selectionMessage = document.createElement('div');
    selectionMessage.textContent = 'You picked: ' + button.id + '  Computer picked: ' + computerSelection.toLowerCase(); 
    tallyContainer.append(selectionMessage);
    if (!divMessage.textContent) {
        divMessage.remove();
    }
}

//count the number of wins each player has in 5 rounds
function tally(roundWinner) {
    if (roundWinner == 'player') {
        playerWinTally += 1;
    } else if (roundWinner == 'computer') {
        computerWinTally += 1;
    }
}

const container = document.querySelector('#results');
const divMessage = document.createElement('div');
//check which of the two has more wins
function declareWinner(playerScore, computerScore) {
    if (playerScore == 5 && computerScore < 5) {
        divMessage.textContent = 'The winner is the player!';
        container.append(divMessage);
        playerWinTally = 0;
        computerWinTally = 0;
    } else if (playerScore < 5 && computerScore == 5) {
        divMessage.textContent = 'The winner is the computer!';
        container.append(divMessage);
        playerWinTally = 0;
        computerWinTally = 0;;
    } else if (playerScore == 5 && computerScore == 5){
        divMessage.textContent = 'No one is the winner!';
        container.append(divMessage);
        playerWinTally = 0;
        computerWinTally = 0;
    }
}