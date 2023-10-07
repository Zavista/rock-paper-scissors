function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3); //Returns a random integer from 0 to 2 (inclusive)
    if (rand == 0){
        return "Rock";
    }
    else if (rand == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playGame(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection == "rock"){
        if(computerSelection == "Rock"){
            return "Tie!";
        }
        else if (computerSelection == "Paper"){
            return "You lose! Paper beats Rock";
        }
        else{
            return "You win! Rock beats Scissors";
        }
    }
    if (playerSelection == "paper"){
        if(computerSelection == "Rock"){
            return "You win! Paper beats Rock";
        }
        else if (computerSelection == "Paper"){
            return "Tie!";
        }
        else{
            return "You lose! Scissors beats Paper" ;
        }
    }
    if (playerSelection == "scissors"){
        if(computerSelection == "Rock"){
            return "You lose! Rock beats Scissors";
        }
        else if (computerSelection == "Paper"){
            return "You win! Scissors beats Paper";
        }
        else{
            return "Tie!";
        }
    }
    return playerSelection;
}

//Test Cases
console.log(playGame("ROCk", getComputerChoice()));
console.log(playGame("rocK", getComputerChoice()));
console.log(playGame("PapEr", getComputerChoice()));
console.log(playGame("paper", getComputerChoice()));
console.log(playGame("ScissoRs", getComputerChoice()));
console.log(playGame("scissors", getComputerChoice()));