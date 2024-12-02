

const getComputerChoice = () => {
    const random = Math.random();

    if (random < 1 / 3) {
        return "rock";
    } else if (random < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0; 
     
    for(i = 1; i < 6; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection)
        

        if (result === 1) {
            humanScore++
        } else if (result === -1){
            computerScore++
        }
        console.log("Round " + i)
        console.log(`Your score: ${humanScore}`)
        console.log(`Computer score: ${computerScore}`)
    }

    console.log("\nFinal Score:");
    console.log(`Your final score: ${humanScore}`);
    console.log(`Computer's final score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You win!")
    }else if (humanScore < computerScore) {
        console.log("You lose!")
    }else {
        console.log("The game is a tie!")
    }
}

const getHumanChoice = () => prompt("Rock, paper or scissors?").toLowerCase();




const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        return 0;
    } 
    if (
        (humanChoice === "rock" &&  computerChoice === "paper") || 
        (humanChoice === "paper" &&  computerChoice === "scissors") ||
        (humanChoice === "scissors" &&  computerChoice === "rock")
    ) {
        console.log(`You lose! ${computerChoice} beast ${humanChoice}`);
        return -1;
    } else {
        console.log(`You win! ${humanChoice} beast ${computerChoice}`);
        return 1;
    }

        
}

playGame();



