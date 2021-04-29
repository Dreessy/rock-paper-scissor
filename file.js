let player = 0;
let computer = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const risults = document.querySelector("#risults");

rock.addEventListener("click", () => { playerRound(rock.id) });
paper.addEventListener("click", () => { playerRound(paper.id) });
scissor.addEventListener("click", () => { playerRound(scissor.id) });

risults.textContent = player + " - " + computer;

function computerPlay() {
    let computerValue = Math.floor(Math.random() * 3);
    return computerValue;
}
function playerPlay(playerValue) {
    switch (playerValue) {
        case ("rock"):
            console.log("rock");
            return 0;
        case ("paper"):
            console.log("paper");
            return 1;
        case ("scissor"):
            console.log("scissor");
            return 2;
    }
}
function playerRound(selection) {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay(selection);
    if (playerSelection == 0 && computerSelection == 0) {
        console.log("Draw")

    }
    else if (playerSelection == 1 && computerSelection == 1) {
        console.log("Draw")

    }
    else if (playerSelection == 2 && computerSelection == 2) {
        console.log("Draw")

    }
    else if (playerSelection == 0 && computerSelection == 1) {
        console.log("Computer Win")
        computer++;

    }

    else if (playerSelection == 0 && computerSelection == 2) {
        console.log("Computer win")
        computer++;
    }
    else if (playerSelection == 1 && computerSelection == 0) {
        console.log("Player win")
        computer++;

    }
    else if (playerSelection == 1 && computerSelection == 2) {
        console.log("Computer win")
        computer++;

    }
    else if (playerSelection == 2 && computerSelection == 0) {
        console.log("Computer win")
        computer++;

    }
    else if (playerSelection == 2 && computerSelection == 1) {
        console.log("Player win")
        player++;

    }
    risults.textContent = player + " - " + computer;
    if (player === 5) {
        alert("player win the game");
        player = 0;
        compuiter = 0;
        risults.textContent = player + " - " + computer;
    }
    else if (computer === 5) {
        alert("Computer win the game");
        player = 0;
        computer = 0;
        risults.textContent = player + " - " + computer;
    }
}


