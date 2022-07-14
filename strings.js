export const ROUND_TIE_MESSAGE = (playerMove, computerMove) =>
  `Close one! ${playerMove} ties with ${computerMove}!`;
export const ROUND_WIN_MESSAGE = (playerMove, computerMove) =>
  `You won! ${playerMove} beats ${computerMove}!`;
export const ROUND_LOSE_MESSAGE = (playerMove, computerMove) =>
  `You lost... ${playerMove} is beaten by ${computerMove}.`;

export const GAME_WIN_MESSAGE = "AND THAT'S VICTORY!!!";
export const GAME_LOSE_MESSAGE = "Darn... tough game!";
