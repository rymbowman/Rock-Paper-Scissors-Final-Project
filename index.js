document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello")
    getComputerChoice();
})

function getComputerChoice() {
let computerOptions = ['rock', 'paper', 'scissors'];
let computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
let computerChoiceImgOutput = document.querySelector('#computer-result');
console.log(computerChoice);

if (computerChoice === 'rock'){
    computerChoiceImgOutput.innerHTML = "Computer selects: <img src=\"https://img.icons8.com/emoji/48/rock-emoji.png\" width=\"48px\" height=\"48px\">"
} else if (computerChoice === 'paper'){
    computerChoiceImgOutput.innerHTML = "Computer Selects: <img src=\"https://img.icons8.com/dusk/48/paper.png\" width=\"48px\" height=\"48px\">"
} else {
    computerChoiceImgOutput.innerHTML = "Computer Selects: <img src=\"https://img.icons8.com/color/48/scissors.png\" width=\"48px\" height=\"48px\">"
}
};