document.addEventListener('DOMContentLoaded', () => {
    playRound();
})

let computerScore = 0;
let userScore = 0;
const weaponOptions = ['rock', 'paper', 'scissors'];


document.querySelector('#rock-img').addEventListener('click', () => {
        playRound('rock')
    })
document.querySelector('#paper-img').addEventListener('click', () => {
        playRound('paper')
    })
document.querySelector('#scissors-img').addEventListener('click', () => {
        playRound('scissors')
    })


function playRound(choice){
    let userChoice = choice
    let computerChoice = weaponOptions[Math.floor(Math.random()* weaponOptions.length)];
    console.log(userChoice);
    console.log(computerChoice);
    roundResult(userChoice, computerChoice);
}


        
function roundResult(userChoice, computerChoice){
    let resultMessage = document.querySelector('#round-result-message');
    let computerChoiceImgOutput = document.querySelector('#computer-result');
    if (userChoice === 'rock' && computerChoice === 'rock') {
        computerChoiceImgOutput.innerHTML = "Computer selected: <img src=\"https://img.icons8.com/emoji/48/rock-emoji.png\" width=\"48px\" height=\"48px\">"
        resultMessage.innerHTML = "That is a tie:/"
    } else if (userChoice === 'paper' && computerChoice === 'paper') {
        computerChoiceImgOutput.innerHTML = "Computer Selected: <img src=\"https://img.icons8.com/dusk/48/paper.png\" width=\"48px\" height=\"48px\">"
        resultMessage.innerHTML = "That is a tie:/"
    } else if (userChoice === 'scissors' && computerChoice === 'scissors'){
        computerChoiceImgOutput.innerHTML = "Computer Selected: <img src=\"https://img.icons8.com/color/48/scissors.png\" width=\"48px\" height=\"48px\">"
        resultMessage.innerHTML = "That is a tie:/"
    } else if(userChoice === 'rock' && computerChoice === 'scissors'){
        computerChoiceImgOutput.innerHTML = "Computer Selected: <img src=\"https://img.icons8.com/color/48/scissors.png\" width=\"48px\" height=\"48px\">"
        resultMessage.innerHTML = "You win!!"
    } else if (userChoice === 'paper' && computerChoice === 'rock'){
        computerChoiceImgOutput.innerHTML = "Computer selected: <img src=\"https://img.icons8.com/emoji/48/rock-emoji.png\" width=\"48px\" height=\"48px\">"
        resultMessage.innerHTML = "You win!!"
    } else if (userChoice === 'scissors' && computerChoice === 'paper'){
        computerChoiceImgOutput.innerHTML = "Computer Selected: <img src=\"https://img.icons8.com/dusk/48/paper.png\" width=\"48px\" height=\"48px\">"
        resultMessage.innerHTML = "You win!!"
    } else if(userChoice === 'rock' && computerChoice === 'paper'){
        computerChoiceImgOutput.innerHTML = "Computer Selected: <img src=\"https://img.icons8.com/dusk/48/paper.png\" width=\"48px\" height=\"48px\">"
        resultMessage.innerHTML = "Computer wins:("
    } else if (userChoice === 'paper' && computerChoice === 'scissors'){
        computerChoiceImgOutput.innerHTML = "Computer Selected: <img src=\"https://img.icons8.com/color/48/scissors.png\" width=\"48px\" height=\"48px\">"
        resultMessage.innerHTML = "Computer wins:("
    } else if (userChoice === 'scissors' && computerChoice === 'rock'){
        computerChoiceImgOutput.innerHTML = "Computer selected: <img src=\"https://img.icons8.com/emoji/48/rock-emoji.png\" width=\"48px\" height=\"48px\">"
        resultMessage.innerHTML = "Computer wins:("
    }
    }




