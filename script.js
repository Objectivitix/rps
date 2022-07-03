const MOVES = ["Rock", "Paper", "Scissors"];

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
  if (playerMove === computerMove) {
    return `Close one! ${playerMove} ties with ${computerMove}!`;
  } else if (playerWins(playerMove, computerMove)) {
    return `You won! ${playerMove} beats ${computerMove}!`;
  } else {
    return `You lost... ${computerMove} beats ${playerMove}.`;
  }
}