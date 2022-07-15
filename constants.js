export const MOVES = ["Shrek", "Morb", "Minion"];

export const ROUND_RESULT_MESSAGE = (result, playerMove, computerMove) => (
  (result === "tie") ? `Close one! ${playerMove} ties with ${computerMove}!` :
  (result === "win") ? `You won! ${playerMove} beats ${computerMove}!` :
  `You lost... ${playerMove} is beaten by ${computerMove}.`
);

export const GAME_WIN_MESSAGE = "AND THAT'S VICTORY!!!";
export const GAME_LOSE_MESSAGE = "Darn... tough game!";
