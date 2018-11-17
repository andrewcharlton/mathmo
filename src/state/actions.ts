import { Question } from '~/models';
import { Type } from './types';

interface NewGame {
  type: Type.NewGame;
  payload: {
    game: string;
    questions: Question[];
  };
}

interface Guess {
  type: Type.Guess;
  payload: {
    guess: number;
  };
}

export type Action = NewGame | Guess;

export const Actions = {
  newGame: (game: string, questionGenerator: () => Question): Action => {
    // Create list of questions, avoiding consecutive duplicates
    const questions: Question[] = [];
    while (questions.length < 10) {
      const q = questionGenerator();
      if (questions.length === 0 || questions[questions.length - 1].prompt !== q.prompt) {
        questions.push(q);
      }
    }

    return {
      type: Type.NewGame,
      payload: { game, questions },
    };
  },
  guess: (guess: number): Action => ({ type: Type.Guess, payload: { guess } }),
};
