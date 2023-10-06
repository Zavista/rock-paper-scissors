console.log("hi");
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3); //Returns a random integer from 0 to 2 (inclusive)
    if (rand == 0){
        return "Rock";
    }
    else if (rand == 1){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}