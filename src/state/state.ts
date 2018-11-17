import { Question } from '~/models';

export interface State {
  game: string;
  questions: Question[];
  currentQuestion: number;
  incorrectGuesses: number[];
  score: number;
}
