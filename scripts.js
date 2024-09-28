let humanScore = 0
let computerScore = 0

const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const roll = choices[Math.floor(Math.random() * choices.length)]
    return roll
    
}

function getHumanChoice() {
    const humanChoice = prompt("Input your choice.")
    return humanChoice
}

function playGame() {
    for (i = 0; i < 5; i++) {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("its a draw")
        }
        else if (
                (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
                (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
                (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") 
        ) {
            console.log("You win!")
            humanScore++
        }
        else {
            console.log("Computer wins")
            computerScore++
        }
    }
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)
    console.log("Your score is " + humanScore + " VS " + computerScore)
    
}

}

playGame()
