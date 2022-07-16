import {
  MOVES, IMAGE_PATHS, ROUND_RESULT_MESSAGE,
  GAME_WIN_MESSAGE, GAME_LOSE_MESSAGE,
} from "./constants.js";

function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function computerPlay() {
  return MOVES[Math.floor(Math.random() * MOVES.length)];
}

function playerWins(p, c) {
  // MOVES is always in 2 < 0 < 1 < 2 format
  return (
    p === MOVES[0] && c === MOVES[2] ||
    p === MOVES[1] && c === MOVES[0] ||
    p === MOVES[2] && c === MOVES[1]
  );
}

function colorise(text) {
  return text
    .replace(/Shrek/g, "<span class='shrek'>Shrek</span>")
    .replace(/Morb/g, "<span class='morb'>Morb</span>")
    .replace(/Minion/g, "<span class='minion'>Minion</span>");
}

function displayComputerMove(computerMove) {
  const selectionPara = document.querySelector(".computer-selection");
  selectionPara.classList.remove("hidden");

  const selectionImage = selectionPara.lastChild;
  selectionImage.src = IMAGE_PATHS[computerMove];
}

function playRound(playerMove, computerMove) {
  const gameResultNode = document.querySelector(".game-result");
  let victoryDecided = false;

  let roundResult;
  if (playerMove === computerMove) {
    roundResult = "tie";
  } else if (playerWins(playerMove, computerMove)) {
    roundResult = "win";
    const playerScoreNode = document.querySelector(".player-score")
    if (++playerScoreNode.textContent === 5) {
      gameResultNode.textContent = GAME_WIN_MESSAGE;
      victoryDecided = true;
    }
  } else {
    roundResult = "lose";
    const computerScoreNode = document.querySelector(".computer-score")
    if (++computerScoreNode.textContent === 5) {
      gameResultNode.textContent = GAME_LOSE_MESSAGE;
      victoryDecided = true;
    }
  }

  displayComputerMove(computerMove);

  const roundResultNode = document.querySelector(".round-result");
  const roundMsg = ROUND_RESULT_MESSAGE(roundResult, playerMove, computerMove);
  roundResultNode.innerHTML = colorise(roundMsg);

  return victoryDecided;
}

function onRestartButtonClick(evt) {
  gameButtons.forEach(
    button => button.addEventListener("click", onGameButtonClick)
  );

  document.querySelector(".computer-selection").classList.add("hidden");

  document.querySelector(".player-score").textContent = 0;
  document.querySelector(".computer-score").textContent = 0;
  document.querySelector(".round-result").innerHTML = "";
  document.querySelector(".game-result").textContent = "";

  evt.target.classList.add("hidden");
}

function onGameButtonClick(evt) {
  evt.target.classList.add("active");

  const playerMove = capitalise(evt.target.classList[0]);
  const computerMove = computerPlay();

  if (playRound(playerMove, computerMove)) {
    gameButtons.forEach(
      button => button.removeEventListener("click", onGameButtonClick)
    );

    restartButton.classList.remove("hidden");
  }
}

function removeActiveClass(evt) {
  if (evt.propertyName !== "opacity") return;
  evt.target.classList.remove("active");
}

const gameButtons = document.querySelectorAll(".buttons > img");
gameButtons.forEach(button => {
  button.addEventListener("click", onGameButtonClick);
  button.addEventListener("transitionend", removeActiveClass)
});

const restartButton = document.querySelector(".restart-button");
restartButton.addEventListener("click", onRestartButtonClick);
