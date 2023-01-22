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

//repeat entire game for 5 rounds and declare ultimate winner
let playerWinTally = 0;
let computerWinTally = 0;
let gameWinner;
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice of rock paper scissors: ");
        let computerSelection = getComputerChoice().toLowerCase();
        playerSelection = playerSelection.toLowerCase();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult + " is the round winner");
        tally(roundResult);
        console.log('Player selection: ' + playerSelection + ' Computer selection: ' + computerSelection);
        console.log('player tally is ' + playerWinTally + ' and computer tally ' + computerWinTally);
    }
    gameWinner = declareWinner(playerWinTally, computerWinTally);
    console.log(gameWinner + ' is the winner!');
}

//count the number of wins each player has in 5 rounds
function tally(roundWinner) {
    if (roundWinner == 'player') {
        playerWinTally += 1;
    } else if (roundWinner == 'computer') {
        computerWinTally += 1;
    }
}

//check which of the two has more wins
function declareWinner(playerWinTally, computerWinTally) {
    if (playerWinTally > computerWinTally) {
        gameWinner = 'player';
        return gameWinner;
    } else if (playerWinTally < computerWinTally) {
        gameWinner = 'computer';
        return gameWinner;
    } else {
        gameWinner = 'No one';
        return gameWinner;
    }
}