interface CurrentQuestion {
  question: string;
  answer: number;
  incorrectAnswers: number[];
}

export interface State {
  bondsTo: number;
  score: number;
  roundsPlayed: number;
  maxRounds: number;
  currentQuestion: CurrentQuestion;
}

const newQuestion = (bondsTo: number): CurrentQuestion => {
  const n = Math.floor(Math.random() * (1 + bondsTo));
  return {
    question: `${n} + ? = ${bondsTo}`,
    answer: bondsTo - n,
    incorrectAnswers: [],
  };
};

// const newGame = (bondsTo: number, maxRounds: number): State => ({
//   bondsTo,
//   score: 0,
//   roundsPlayed: 0,
//   maxRounds,
//   currentQuestion: newQuestion(bondsTo),
// });

export enum Types {
  Guess = 'Guess',
}

export interface Action {
  type: Types.Guess;
  payload: {
    n: number;
  };
}

export const Actions = {
  guess: (n: number): Action => ({ type: Types.Guess, payload: { n } }),
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.Guess: {
      if (action.payload.n === state.currentQuestion.answer) {
        return {
          ...state,
          score: state.score + 3 - state.currentQuestion.incorrectAnswers.length,
          roundsPlayed: state.roundsPlayed + 1,
          currentQuestion: newQuestion(state.bondsTo),
        };
      } else {
        return {
          ...state,
          currentQuestion: {
            ...state.currentQuestion,
            incorrectAnswers: [...state.currentQuestion.incorrectAnswers, action.payload.n],
          },
        };
      }
    }
    default: {
      return state;
    }
  }
};
