//add events to each time we click the button
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener('click', () => playRound("Rock", getComputerChoice()));

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener('click', () => playRound("Paper", getComputerChoice()));

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener('click', () => playRound("Scissors", getComputerChoice()));

const resetBtn = document.querySelector("#reset-button");
resetBtn.addEventListener("click", resetGame);

let userScore = 0;
let cpuScore = 0;
//Counters to store score

function updateCounters(){ //function to update our HTML counters
    document.querySelector("#user-score").textContent = `Your Score: ${userScore}`;
    document.querySelector("#cpu-score").textContent = `CPU Score: ${cpuScore}`;
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
    const outcomes = {
        Rock: {win: "Scissors", lose: "Paper"},
        Paper: {win: "Rock", lose: "Scissors"},
        Scissors: {win: "Paper", lose: "Rock"}
    };
    //Think of outcomes as a python dictionary that takes the user choice as a key and stores its win and lose scenario in another dictionary
    /* 
    For Rock: {win: "Scissors", lose: "Paper"},
        Rock is the key to access this key-value pair.
        Its value is aslo another dictionary
        If given win, it returns "Scissors"
        If given lose, it returns "Paper"
    */

    const imgSources ={
        Rock: "images/rock (1).png",
        Paper: "images/paper (1).png",
        Scissors: "images/scissors (1).png"
    }
    document.querySelector("#cpu-image").src = imgSources[computerSelection];
    
    if (playerSelection === computerSelection){
        document.querySelector("#choice").textContent = `It's a draw! You both chose ${computerSelection.toLowerCase()}.`;
    }
    else if (outcomes[playerSelection].win === computerSelection){
        //This enters playerSelection into outcomes which returns a value which is also a dictionary
        //Then it enters win into that dictionary which returns its value, which is the value where playerSelection wins if computerSelection === that value
        //Note outcomes[playerSelection].win and (outcomes[playerSelection])[win] are both valid
        document.querySelector("#choice").textContent = `Victory! ${playerSelection} beats ${computerSelection.toLowerCase()}.`;
        userScore++;
    }
    else{
        document.querySelector("#choice").textContent = `Defeat! ${computerSelection} crushes ${playerSelection.toLowerCase()}.`;
        cpuScore++;
    }
    updateCounters();
    //update our counters
    checkWinner();
}

function resetGame(){ //Resets the score and starting image 
    userScore = 0;
    cpuScore = 0;
    updateCounters();
    document.querySelector("#cpu-image").src = "images/robot.png";
    document.querySelector("#game-end").style.display="none"; //hides the game-end
    document.querySelector("#choice").textContent = "First to 5 Wins!";
}

function checkWinner(){ //Checks for winner and display game-end
    if (userScore == 5){
        document.querySelector("#game-result").textContent="You Win!";
        document.querySelector("#game-end").style.display="flex";
    }
    else if (cpuScore == 5){
        document.querySelector("#game-result").textContent="You Lose!";
        document.querySelector("#game-end").style.display="flex";
    }
}