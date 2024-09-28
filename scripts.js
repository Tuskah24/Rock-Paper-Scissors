let humanScore = 0
let computerScore = 0

const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const roll = choices[Math.floor(Math.random() * choices.length)]
    return roll
    
}

function getHumanChoice() {
    const humanChoice = prompt("Input your choice.")
    console.log(humanChoice)
}

function playGame() {
    
}

