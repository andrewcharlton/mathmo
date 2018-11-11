import { State } from './state';

export const Selectors = {
  getGameType: (state: State) => state.game,
  getQuestion: (state: State) => state.question,
  isCorrect: (state: State) => state.correct,
  getWrongAnswers: (state: State) => state.wrongAnswers,
  getScore: (state: State) => state.score,
  getRound: (state: State) => state.round,
  getMaxRounds: (state: State) => state.maxRounds,
  isFinished: (state: State) => state.finished,
};
