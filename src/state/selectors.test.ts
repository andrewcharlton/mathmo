import { Selectors } from './selectors';
import { State } from './state';

const state: State = {
  game: 'TestGame',
  questions: [{ prompt: '1', answer: 1 }, { prompt: '2', answer: 2 }, { prompt: '3', answer: 3 }],
  currentQuestion: 1,
  incorrectGuesses: [3],
  score: 2,
};

test('getGame', () => expect(Selectors.getGame(state)).toEqual('TestGame'));

test('getQuestion exists', () =>
  expect(Selectors.getQuestion(state)).toEqual({ prompt: '2', answer: 2 }));

test('getQuestion doesnt exist', () =>
  expect(Selectors.getQuestion({ ...state, currentQuestion: 3 })).toEqual(null));

test('getIncorrectGuesses', () => expect(Selectors.getIncorrectGuesses(state)).toEqual([3]));

test('getScore', () => expect(Selectors.getScore(state)).toEqual(2));

test('getRound', () => expect(Selectors.getRound(state)).toEqual(2));

test('getMaxRound', () => expect(Selectors.getMaxRounds(state)).toEqual(3));

test('isComplete', () => expect(Selectors.isComplete(state)).toEqual(false));

test('is not complete', () =>
  expect(Selectors.isComplete({ ...state, currentQuestion: 3 })).toEqual(true));
