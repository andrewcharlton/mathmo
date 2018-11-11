import { newQuestion, Question } from './question';
import { Game, Type } from './types';

interface StartGame {
  type: Type.StartGame;
  payload: {
    game: Game;
    question: Question;
  };
}

interface NewQuestion {
  type: Type.NewQuestion;
  payload: {
    question: Question;
  };
}

interface Guess {
  type: Type.Guess;
  payload: {
    guess: number;
  };
}

export type Action = StartGame | NewQuestion | Guess;

export const Actions = {
  startGame: (game: Game): Action => ({
    type: Type.StartGame,
    payload: { game, question: newQuestion(game) },
  }),
  newQuestion: (game: Game): Action => ({
    type: Type.NewQuestion,
    payload: { question: newQuestion(game) },
  }),
  guess: (guess: number): Action => ({ type: Type.Guess, payload: { guess } }),
};
