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
        document.querySelector("#choice").textContent = `Tie! ${playerSelection} | ${computerSelection}`;
    }
    else if (outcomes[playerSelection].win === computerSelection){
        //This enters playerSelection into outcomes which returns a value which is also a dictionary
        //Then it enters win into that dictionary which returns its value, which is the value where playerSelection wins if computerSelection === that value
        //Note outcomes[playerSelection].win and (outcomes[playerSelection])[win] are both valid
        document.querySelector("#choice").textContent = `Win! ${playerSelection} | ${computerSelection}`;
        userScore++;
    }
    else{
        document.querySelector("#choice").textContent = `Lose! ${playerSelection} | ${computerSelection}`;
        cpuScore++;
    }
    updateCounters();
    //update our counters
}


//add events to each time we click the button
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener('click', () => playRound("Rock", getComputerChoice()));

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener('click', () => playRound("Paper", getComputerChoice()));

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener('click', () => playRound("Scissors", getComputerChoice()));