import { Action, Actions } from './actions';
import { Game, Type } from './types';

const rnd = Math.random;
const rndMock = () => 0.1;

beforeEach(() => {
  global.Math.random = rndMock;
});

afterEach(() => {
  global.Math.random = rnd;
});

test('startGame', () => {
  const expected: Action = {
    type: Type.StartGame,
    payload: {
      game: Game.NumberBondsTo10,
      question: {
        prompt: '9 + ? = 10',
        answer: 1,
      },
    },
  };
  expect(Actions.startGame(Game.NumberBondsTo10)).toEqual(expected);
});

test('newQuestion', () => {
  const expected: Action = {
    type: Type.NewQuestion,
    payload: {
      question: {
        prompt: '9 + ? = 10',
        answer: 1,
      },
    },
  };
  expect(Actions.newQuestion(Game.NumberBondsTo10)).toEqual(expected);
});

test('guess', () => {
  const expected: Action = {
    type: Type.Guess,
    payload: {
      guess: 5,
    },
  };
  expect(Actions.guess(5)).toEqual(expected);
});
