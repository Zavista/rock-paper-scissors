let winCount = 0;
let tieCount = 0;
let lossCount = 0;
//Counters to store our W/T/L 

function updateCounters(){ //function to update our HTML counters
    document.querySelector("#win").textContent = `Win: ${winCount}`;
    document.querySelector("#tie").textContent = `Tie: ${tieCount}`;
    document.querySelector("#loss").textContent = `Loss: ${lossCount}`;
}

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

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection == "rock"){
        if(computerSelection == "Rock"){
            tieCount++;
            updateCounters();
            return "Tie!";
        }
        else if (computerSelection == "Paper"){
            lossCount++;
            updateCounters();
            return "You lose! Paper beats Rock";
        }
        else{
            winCount++;
            updateCounters();
            return "You win! Rock beats Scissors";
        }
    }
    if (playerSelection == "paper"){
        if(computerSelection == "Rock"){
            winCount++;
            updateCounters();
            return "You win! Paper beats Rock";
        }
        else if (computerSelection == "Paper"){
            tieCount++;
            updateCounters();
            return "Tie!";
        }
        else{
            lossCount++;
            updateCounters();
            return "You lose! Scissors beats Paper" ;
        }
    }
    if (playerSelection == "scissors"){
        if(computerSelection == "Rock"){
            lossCount++;
            updateCounters();
            return "You lose! Rock beats Scissors";
        }
        else if (computerSelection == "Paper"){
            winCount++;
            updateCounters();
            return "You win! Scissors beats Paper";
        }
        else{
            tieCount++;
            updateCounters();
            return "Tie!";
        }
    }
    return playerSelection;
}

function game(){
    let numofGames = 5;
    let i = 0;
    while (i < numofGames){
        alert(playRound(prompt("Make your choice!"), getComputerChoice())); //alert() will make it pop up on the screen.
        i++;
        console.log("Games Played: " + i);
    }
}

//add events to each time we click the button
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener('click', () => playRound("scissors", getComputerChoice()));