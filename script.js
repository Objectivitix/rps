const MOVES = ["Rock", "Paper", "Scissors"];

function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function computerPlay() {
  return MOVES[Math.floor(Math.random() * MOVES.length)];
}

function playerWins(p, c) {
  return (
    p === "Rock" && c === "Scissors" ||
    p === "Paper" && c === "Rock" ||
    p === "Scissors" && c === "Paper"
  );
}

function playRound(playerMove, computerMove) {
  if (playerMove === computerMove) return "tie";
  else if (playerWins(playerMove, computerMove)) return "win";
  else return "lose";
}

function game() {
  let playerScore = computerScore = 0;

  for (let i = 0; i < 3; i++) {
    const playerMove = capitalise(prompt("Choose your move (rock, paper, or scissors)!"));
    const computerMove = computerPlay();
    const result = playRound(playerMove, computerMove)

    if (result === "tie") {
      console.log(`Close one! ${playerMove} ties with ${computerMove}!`);
    } else if (result === "win") {
      console.log(`You won! ${playerMove} beats ${computerMove}!`);
      playerScore++;
    } else {
      console.log(`You lost... ${computerMove} beats ${playerMove}.`);
      computerScore++;
    }

    if (playerScore === 2) {
      console.log("AND THAT'S VICTORY!!!");
      break;
    } else if (computerScore === 2) {
      console.log("Darn... tough game!");
      break;
    }
  }

  if (playerScore === computerScore) console.log("Tied! That was close!");
  console.log(`Final score: ${playerScore}-${computerScore}`)
}