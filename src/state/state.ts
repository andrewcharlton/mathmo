import { newQuestion, Question } from './question';
import { Game } from './types';

export interface State {
  game: Game;
  question: Question;
  correct: boolean;
  wrongAnswers: number[];
  score: number;
  round: number;
  maxRounds: number;
  finished: boolean;
}

export const InitialState: State = {
  game: Game.NumberBondsTo10,
  question: newQuestion(Game.NumberBondsTo10),
  correct: false,
  wrongAnswers: [],
  score: 0,
  round: 1,
  maxRounds: 10,
  finished: false,
};
