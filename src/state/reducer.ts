import { Action } from './actions';
import { InitialState, State } from './state';
import { Type } from './types';

export const reducer = (state: State = InitialState, action: Action): State => {
  switch (action.type) {
    case Type.StartGame:
      return {
        game: action.payload.game,
        question: action.payload.question,
        correct: false,
        wrongAnswers: [],
        score: 0,
        round: 1,
        maxRounds: 10,
        finished: false,
      };

    case Type.NewQuestion:
      return {
        ...state,
        question: action.payload.question,
        correct: false,
        wrongAnswers: [],
        round: state.round + 1,
      };

    case Type.Guess: {
      const correct = state.question.answer === action.payload.guess;
      const wrongAnswers = [...state.wrongAnswers];
      if (!correct) {
        wrongAnswers.push(action.payload.guess);
      }
      return {
        ...state,
        correct,
        wrongAnswers,
        score: correct ? state.score + 3 - wrongAnswers.length : state.score,
        finished: correct && state.round === state.maxRounds,
      };
    }

    default:
      return state;
  }
};
