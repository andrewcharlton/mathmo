import { Game } from './types';

export interface Question {
  prompt: string;
  answer: number;
}

const questions: { [game in Game]: () => Question } = {
  [Game.NumberBondsTo10]: () => {
    const answer = Math.floor(Math.random() * 11);
    return {
      prompt: `${10 - answer} + ? = 10`,
      answer,
    };
  },
};

export const newQuestion = (game: Game): Question => {
  return questions[game]();
};
