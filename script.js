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
  let selectionPara = document.querySelector(".computer-selection")
  const newPara = !selectionPara;

  if (newPara) {
    selectionPara = document.createElement("p");
    selectionPara.textContent = "Computer selection:";
    selectionPara.classList.add("computer-selection");
  }

  const image = document.createElement("img");
  image.src = IMAGE_PATHS[computerMove];
  if (!newPara) selectionPara.removeChild(selectionPara.lastChild);
  selectionPara.appendChild(image);

  if (newPara) {
    const mainDiv = document.querySelector(".main");
    mainDiv.appendChild(selectionPara);
  }
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

  displayComputerMove(computerMove);

  const roundResultDisplay = document.querySelector(".round-result");
  const roundMsg = ROUND_RESULT_MESSAGE(roundResult, playerMove, computerMove);
  roundResultDisplay.innerHTML = colorise(roundMsg);

  return victoryDecided;
}

function onRestartButtonClick(evt) {
  evt.target.remove();

  gameButtons.forEach(
    button => button.addEventListener("click", onGameButtonClick)
  );

  document.querySelector(".computer-selection").remove();

  document.querySelector(".player-score").textContent = 0;
  document.querySelector(".computer-score").textContent = 0;
  document.querySelector(".round-result").innerHTML = "";
  document.querySelector(".game-result").textContent = "";
}

function onGameButtonClick(evt) {
  evt.target.classList.add("active");

  const playerMove = capitalise(evt.target.classList[0]);
  const computerMove = computerPlay();

  if (playRound(playerMove, computerMove)) {
    gameButtons.forEach(
      button => button.removeEventListener("click", onGameButtonClick)
    );

    const restartButton = document.createElement("button");
    restartButton.classList.add("restart-button");
    restartButton.textContent = "Play again?";
    restartButton.addEventListener("click", onRestartButtonClick);

    const container = document.querySelector(".results-container");
    container.appendChild(restartButton);
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
