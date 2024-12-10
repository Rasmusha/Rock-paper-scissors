

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

let humanScore = 0;
let computerScore = 0; 


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        const humanSelection = button.textContent;
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        const scores = document.querySelector("div");
        scores.textContent = `Scores: Human ${humanScore} Computer ${computerScore}`;

        if(humanScore === 5) {
            alert("You won!")
            computerScore = 0;
            humanScore = 0;
        }else if (computerScore === 5) {
            alert("You lost!");
            computerScore = 0;
            humanScore = 0;
        }
    });
  });


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
        computerScore++;
    } else {
        console.log(`You win! ${humanChoice} beast ${computerChoice}`);
        humanScore++;
    }

        
}





