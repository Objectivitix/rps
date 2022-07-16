// MOVES must be in 2 < 0 < 1 < 2 format for playerWins to function
export const MOVES = ["Shrek", "Morb", "Minion"];

export const IMAGE_PATHS = {
  "Shrek": "./images/shrek.jpg",
  "Morb": "./images/morb.jpg",
  "Minion": "./images/minion.jpg",
};

export const ROUND_RESULT_MESSAGE = (result, playerMove, computerMove) => (
  (result === "tie") ? `Close one! ${playerMove} ties with ${computerMove}!` :
  (result === "win") ? `You won! ${playerMove} beats ${computerMove}!` :
  `You lost... ${playerMove} is beaten by ${computerMove}.`
);

export const GAME_WIN_MESSAGE = "AND THAT'S VICTORY!!!";
export const GAME_LOSE_MESSAGE = "Darn... tough game!";
