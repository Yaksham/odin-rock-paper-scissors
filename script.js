const map1 = new Map();

map1.set('paper', 'rock');
map1.set('scissors', 'paper');
map1.set('rock', 'scissors');

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    const options = ['rock', 'scissors', 'paper'];
    return options[choice];
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice)
        return 0;

    if (map1.get(playerChoice) === computerChoice)
        return 1;
    else
        return -1;
}

let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').onsubmit = () => {
        const playerChoice = document.querySelector('#choice').value;
        let result = playRound(playerChoice, getComputerChoice());
        score += result;
        if (result === 1)
            document.querySelector('h3').innerHTML = 'You won!';
        else if (result === -1)
            document.querySelector('h3').innerHTML = 'You lose!';
        else
            document.querySelector('h3').innerHTML = 'Tie';
            
        document.querySelector('h1').innerHTML = score;
        return false;
    };
})