function computerPlay() {
    let computerValue = Math.floor(Math.random() * 3);
    return computerValue;
}
function playerPlay() {
    let playerValue = prompt("Choose! Rock,Paper,Scissor");
    playerValue = playerValue.toLowerCase();
    switch (playerValue) {
        case ("rock"):
            return 0;
        case ("paper"):
            return 1;
        case ("scissor"):
            return 2;
        default:
            alert("Insert a value!");
            playerPlay();
    }
}
function playerRound() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    if (playerSelection == 0 && computerSelection == 0) {
        console.log("Draw")
        return 0;
    }
    else if (playerSelection == 1 && computerSelection == 1) {
        console.log("Draw")
        return 0;
    }
    else if (playerSelection == 2 && computerSelection == 2) {
        console.log("Draw")
        return 0;
    }
    else if (playerSelection == 0 && computerSelection == 1) {
        console.log("Computer Win")
        return 2;
    }

    else if (playerSelection == 0 && computerSelection == 2) {
        console.log("Computer win")
        return 2;
    }
    else if (playerSelection == 1 && computerSelection == 0) {
        console.log("Player win")
        return 1;
    }
    else if (playerSelection == 1 && computerSelection == 2) {
        console.log("Computer win")
        return 2;
    }
    else if (playerSelection == 2 && computerSelection == 0) {
        console.log("Computer win")
        return 2;
    }
    else if (playerSelection == 2 && computerSelection == 1) {
        console.log("Player win")
        return 1;
    }
}
function game() {
    let round = 1;
    let playerWins = 0;
    let computerWins = 0;
    while (round <= 5) {
        let result = playerRound();
        if (result === 1) {
            playerWins++;
        }
        else if (result === 2) {
            computerWins++;
        }
        console.log("Player " + playerWins + " - " + "Computer" + computerWins);
        round++;
    }
}
game();