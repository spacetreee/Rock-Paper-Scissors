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
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose!' + ' Your selection: ' + playerSelection + " Computer's selection: " + computerSelection;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win!' + ' Your selection: ' + playerSelection + " Computer's selection: " + computerSelection;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose!' + ' Your selection: ' + playerSelection + " Computer's selection: " + computerSelection;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win!' + ' Your selection: ' + playerSelection + " Computer's selection: " + computerSelection;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose!' + ' Your selection: ' + playerSelection + " Computer's selection: " + computerSelection;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win!' + ' Your selection: ' + playerSelection + " Computer's selection: " + computerSelection;
    } else {
        return 'You tied!' + ' Your selection: ' + playerSelection + " Computer's selection: " + computerSelection;
    }
}

function game () {
    let playerWinTally = 0;
    let computerWinTally = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice of rock paper scissors: ");
        console.log(playerSelection);
        let computerSelection = getComputerChoice().toLowerCase();
        console.log(computerSelection);
        playerSelection = playerSelection.toLowerCase();
        console.log(playerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }

}

//repeat entire game for 5 rounds and keep track who won each timed