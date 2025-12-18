let humanScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  const r = Math.random();
  if (r < 0.33) return "rock";
  if (r < 0.66) return "paper";
  return "scissors";
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    resultDiv.textContent = `Tie! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    resultDiv.textContent =
      humanScore === 5 ? "You won the game!" : "Computer won the game!";
    buttons.forEach(b => b.disabled = true);
  }
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice);
  });
});
