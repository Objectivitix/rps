import {
  PLAYER_MOVE_PROMPT, ROUND_TIE_MESSAGE, ROUND_WIN_MESSAGE, ROUND_LOSE_MESSAGE,
  GAME_TIE_MESSAGE, GAME_WIN_MESSAGE, GAME_LOSE_MESSAGE, FINAL_SCORE,
} from "./strings.js";

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
  let playerScore = 0, computerScore = 0;

  for (let i = 0; i < 3; i++) {
    const playerMove = capitalise(prompt(PLAYER_MOVE_PROMPT));
    const computerMove = computerPlay();
    const result = playRound(playerMove, computerMove)

    if (result === "tie") {
      console.log(ROUND_TIE_MESSAGE(playerMove, computerMove));
    } else if (result === "win") {
      console.log(ROUND_WIN_MESSAGE(playerMove, computerMove));
      playerScore++;
    } else {
      console.log(ROUND_LOSE_MESSAGE(playerMove, computerMove));
      computerScore++;
    }

    if (playerScore === 2) {
      console.log(GAME_WIN_MESSAGE);
      break;
    } else if (computerScore === 2) {
      console.log(GAME_LOSE_MESSAGE);
      break;
    }
  }

  if (playerScore === computerScore) console.log(GAME_TIE_MESSAGE);
  console.log(FINAL_SCORE(playerScore, computerScore));
}