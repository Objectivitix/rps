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
  return (
    p === "Shrek" && c === "Minion" ||
    p === "Morb" && c === "Shrek" ||
    p === "Minion" && c === "Morb"
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

  const selectionPara = document.querySelector(".computer-selection");
  const image = document.createElement("img");
  image.setAttribute("src", IMAGE_PATHS[computerMove]);
  if (selectionPara.lastChild.nodeType === Node.ELEMENT_NODE) {
    selectionPara.removeChild(selectionPara.lastChild);
  }
  selectionPara.appendChild(image);

  const roundResultDisplay = document.querySelector(".round-result");
  const roundMsg =
    ROUND_RESULT_MESSAGE(roundResult, playerMove, computerMove)
    .replace(/Shrek/g, "<span class='shrek'>Shrek</span>")
    .replace(/Morb/g, "<span class='morb'>Morb</span>")
    .replace(/Minion/g, "<span class='minion'>Minion</span>");
  roundResultDisplay.innerHTML = roundMsg;

  return victoryDecided;
}

function onClick(evt) {
  evt.target.classList.add("active");

  const playerMove = capitalise(evt.target.classList[0]);
  const computerMove = computerPlay();

  if (playRound(playerMove, computerMove)) {
    buttons.forEach(button => button.removeEventListener("click", onClick));
  }
}

function removeActiveClass(evt) {
  if (evt.propertyName !== "opacity") return;
  evt.target.classList.remove("active");
}

const buttons = document.querySelectorAll(".buttons > img");
buttons.forEach(button => {
  button.addEventListener("click", onClick);
  button.addEventListener("transitionend", removeActiveClass)
});
