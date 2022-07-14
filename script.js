import {
  ROUND_TIE_MESSAGE, ROUND_WIN_MESSAGE, ROUND_LOSE_MESSAGE,
  GAME_TIE_MESSAGE, GAME_WIN_MESSAGE, GAME_LOSE_MESSAGE,
  GAME_MESSAGE_STYLE, FINAL_SCORE, FINAL_SCORE_STYLE,
} from "./strings.js";

const MOVES = ["Rock", "Paper", "Scissors"];

const ROUND_RESULT_MESSAGES = {
  "tie": ROUND_TIE_MESSAGE,
  "win": ROUND_WIN_MESSAGE,
  "lose": ROUND_LOSE_MESSAGE,
}

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
  let result;

  if (playerMove === computerMove) {
    result = "tie";
  } else if (playerWins(playerMove, computerMove)) {
    result = "win";
    document.getElementById("player-score").textContent++;
  } else {
    result = "lose";
    document.getElementById("computer-score").textContent++;
  }

  const para = document.getElementById("result");
  const roundMsg = ROUND_RESULT_MESSAGES[result];
  para.textContent = roundMsg(playerMove, computerMove);
}

const buttons = document.querySelectorAll("button");

buttons.forEach(
  button => button.addEventListener("click", () => {
    const playerMove = capitalise(button.className);
    const computerMove = computerPlay();
    console.log(playRound(playerMove, computerMove));
  })
);