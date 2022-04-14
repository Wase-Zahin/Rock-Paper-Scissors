function computerPlay() {
    let val = ['Rock','Paper','Scissor'];
    let play = val[Math.floor(Math.random() * val.length)];
    return play.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    
    console.log('You: ' + playerSelection + ', ' + 'Computer: ' + computerSelection);

    if (playerSelection == computerSelection) console.log("Tie!");
    else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        user ++;
        return("You win! Rock beats Scissor");
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computer ++ ;
        return("You lose! Paper beats Rock"); 
    }
    else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        user ++ ;
        return("You win! Scissor beats Paper");
    }
    else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        computer ++;
        return("You lose! Rock beats Scissor");
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        user ++;
        return("You win! Paper beats Rock");
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        computer++;
        return("You lose! Scissor beats Paper");
    }
    else return('Please enter either Rock,Paper,Scissor');
}
let computer = 0
let user = 0

function game() {
    for (let i=1; i <= 5; i++) {
        if (computer == 5 || user == 5) break;
        console.log(playRound(prompt("RPS GAME", "Please enter your play").toLowerCase(),computerPlay()));
        i = 0;
    }
    console.log('Computer: ' + computer, 'You: ' + user);
    if (computer == user) return('Tie!')
    else if (computer > user) return('You lose!');
    else if (user > computer) return('You win!');
}
console.log(game())


