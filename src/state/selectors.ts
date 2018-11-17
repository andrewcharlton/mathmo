import { State } from './state';

export const Selectors = {
  getGame: (state: State) => state.game,
  getQuestion: (state: State) => {
    if (state.currentQuestion >= state.questions.length) {
      return null;
    }
    return state.questions[state.currentQuestion];
  },
  getIncorrectGuesses: (state: State): number[] => state.incorrectGuesses,
  getScore: (state: State) => state.score,
  getRound: (state: State) => state.currentQuestion + 1,
  getMaxRounds: (state: State) => state.questions.length,
  isComplete: (state: State) => state.currentQuestion >= state.questions.length,
};
