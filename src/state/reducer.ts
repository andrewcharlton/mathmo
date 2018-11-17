import { Action } from './actions';
import { State } from './state';
import { Type } from './types';

const InitialState: State = {
  game: '',
  questions: [],
  currentQuestion: 0,
  incorrectGuesses: [],
  score: 0,
};

export const reducer = (state: State = InitialState, action: Action): State => {
  switch (action.type) {
    case Type.NewGame:
      return {
        game: action.payload.game,
        questions: action.payload.questions,
        currentQuestion: 0,
        incorrectGuesses: [],
        score: 0,
      };

    case Type.Guess: {
      const correct = state.questions[state.currentQuestion].answer === action.payload.guess;
      if (correct) {
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
          incorrectGuesses: [],
          score: state.score + Math.max(3 - state.incorrectGuesses.length, 0),
        };
      }

      const incorrectGuesses = [...state.incorrectGuesses];
      incorrectGuesses.push(action.payload.guess);
      return {
        ...state,
        incorrectGuesses,
      };
    }

    default:
      return state;
  }
};
