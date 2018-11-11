import { Selectors } from './selectors';
import { State } from './state';
import { Game } from './types';

const state: State = {
  game: Game.NumberBondsTo10,
  question: {
    prompt: '3 + ? = 10',
    answer: 7,
  },
  correct: false,
  wrongAnswers: [5],
  score: 3,
  round: 7,
  maxRounds: 10,
  finished: false,
};

test('getGameType', () => expect(Selectors.getGameType(state)).toEqual(Game.NumberBondsTo10));

test('getQuestion', () =>
  expect(Selectors.getQuestion(state)).toEqual({ prompt: '3 + ? = 10', answer: 7 }));

test('isCorrect', () => expect(Selectors.isCorrect(state)).toEqual(false));

test('getWrongAnswers', () => expect(Selectors.getWrongAnswers(state)).toEqual([5]));

test('getScore', () => expect(Selectors.getScore(state)).toEqual(3));

test('getRound', () => expect(Selectors.getRound(state)).toEqual(7));

test('getMaxRounds', () => expect(Selectors.getMaxRounds(state)).toEqual(10));

test('isFinished', () => expect(Selectors.isFinished(state)).toEqual(false));
