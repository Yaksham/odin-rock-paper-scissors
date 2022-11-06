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

let pscore = 0;
let cscore = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const playerChoice = btn.textContent.toLowerCase();
            let result = playRound(playerChoice, getComputerChoice())
            const h3 = document.querySelector('h3');
            if (result === 1) {
                h3.textContent = 'You won!';
                pscore++;
                document.querySelector('#pscore').textContent = pscore;
            }
            else if (result === -1) {
                h3.textContent = 'You lose.';
                cscore++;
                document.querySelector('#cscore').textContent = cscore;
            }
            else
                h3.textContent = 'Tie.';

            if (cscore === 5 || pscore === 5) {
                h3.textContent = '';
                if (cscore === 5)
                    document.querySelector('#result').textContent = 'You lost the game.';
                else
                    document.querySelector('#result').textContent = 'You won the game!';
                pscore = 0;
                cscore = 0;
            }
        })  
    })

    
})