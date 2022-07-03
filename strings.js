export const PLAYER_MOVE_PROMPT =
  "Choose your move (rock, paper, or scissors)!";

export const ROUND_TIE_MESSAGE = (playerMove, computerMove) =>
  `Close one! ${playerMove} ties with ${computerMove}!`;
export const ROUND_WIN_MESSAGE = (playerMove, computerMove) =>
  `You won! ${playerMove} beats ${computerMove}!`;
export const ROUND_LOSE_MESSAGE = (playerMove, computerMove) =>
  `You lost... ${computerMove} beats ${playerMove}.`;

export const GAME_TIE_MESSAGE = "Tied! That was close!";
export const GAME_WIN_MESSAGE = "AND THAT'S VICTORY!!!";
export const GAME_LOSE_MESSAGE = "Darn... tough game!";

export const FINAL_SCORE = (playerScore, computerScore) =>
  `Final score: ${playerScore}-${computerScore}`;