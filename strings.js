export const ROUND_TIE_MESSAGE = (playerMove, computerMove) =>
  `Close one! ${playerMove} ties with ${computerMove}!`;
export const ROUND_WIN_MESSAGE = (playerMove, computerMove) =>
  `You won! ${playerMove} beats ${computerMove}!`;
export const ROUND_LOSE_MESSAGE = (playerMove, computerMove) =>
  `You lost... ${playerMove} is beaten by ${computerMove}.`;

export const GAME_TIE_MESSAGE = "%cTied! That was close!";
export const GAME_WIN_MESSAGE = "%cAND THAT'S VICTORY!!!";
export const GAME_LOSE_MESSAGE = "%cDarn... tough game!";
export const GAME_MESSAGE_STYLE = "font-size: 18px; color: red;"

export const FINAL_SCORE = (playerScore, computerScore) =>
  `%cFinal score: ${playerScore}-${computerScore}`;
export const FINAL_SCORE_STYLE = "color: blue;"