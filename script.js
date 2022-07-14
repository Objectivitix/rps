import {
  ROUND_TIE_MESSAGE, ROUND_WIN_MESSAGE, ROUND_LOSE_MESSAGE,
  GAME_WIN_MESSAGE, GAME_LOSE_MESSAGE,
} from "./strings.js";

const MOVES = ["Rock", "Paper", "Scissors"];
const ROUND_RESULT_MESSAGES = {
  "tie": ROUND_TIE_MESSAGE,
  "win": ROUND_WIN_MESSAGE,
  "lose": ROUND_LOSE_MESSAGE,
}
const buttons = document.querySelectorAll("button");

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
  const gameResultDisplay = document.querySelector(".game-result");
  let victoryDecided = false;

  let roundResult;
  if (playerMove === computerMove) {
    roundResult = "tie";
  } else if (playerWins(playerMove, computerMove)) {
    roundResult = "win";
    const playerScoreDisplay = document.querySelector(".player-score")
    if (++playerScoreDisplay.textContent === 5) {
      gameResultDisplay.textContent = GAME_WIN_MESSAGE;
      victoryDecided = true;
    }
  } else {
    roundResult = "lose";
    const computerScoreDisplay = document.querySelector(".computer-score")
    if (++computerScoreDisplay.textContent === 5) {
      gameResultDisplay.textContent = GAME_LOSE_MESSAGE;
      victoryDecided = true;
    }
  }

  const roundResultDisplay = document.querySelector(".round-result");
  const roundMsg = ROUND_RESULT_MESSAGES[roundResult];
  roundResultDisplay.textContent = roundMsg(playerMove, computerMove);

  return victoryDecided;
}

function onClick(evt) {
  const playerMove = capitalise(evt.target.className);
  const computerMove = computerPlay();

  if (playRound(playerMove, computerMove)) {
    buttons.forEach(button => button.removeEventListener("click", onClick));
  }
}

buttons.forEach(button => button.addEventListener("click", onClick));
