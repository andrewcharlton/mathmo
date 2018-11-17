import { Action, Actions } from './actions';
import { reducer } from './reducer';
import { State } from './state';
import { Type } from './types';

const game = 'TestGame';

const questions = [
  { prompt: '1', answer: 1 },
  { prompt: '2', answer: 2 },
  { prompt: '3', answer: 3 },
  { prompt: '4', answer: 4 },
  { prompt: '5', answer: 5 },
];

test('NewGame', () => {
  const action: Action = {
    type: Type.NewGame,
    payload: {
      game,
      questions,
    },
  };

  const expected: State = {
    game,
    questions,
    currentQuestion: 0,
    incorrectGuesses: [],
    score: 0,
  };

  expect(reducer(undefined, action)).toEqual(expected);
});

describe('Guess', () => {
  const state: State = {
    game,
    questions,
    currentQuestion: 0,
    incorrectGuesses: [2],
    score: 0,
  };

  test('correct guess increments score and currentQuestion', () => {
    const action = Actions.guess(1);
    const expected: State = {
      ...state,
      incorrectGuesses: [],
      score: 2,
      currentQuestion: 1,
    };

    expect(reducer(state, action)).toEqual(expected);
  });

  test('correct guess never decrements score', () => {
    const action = Actions.guess(1);
    const expected: State = {
      ...state,
      incorrectGuesses: [],
      score: 0,
      currentQuestion: 1,
    };

    expect(reducer({ ...state, incorrectGuesses: [2, 3, 4, 5, 6, 7] }, action)).toEqual(expected);
  });

  test('incorrect guess adds guess to wrong answers', () => {
    const action = Actions.guess(8);
    const expected: State = {
      ...state,
      incorrectGuesses: [2, 8],
    };

    expect(reducer(state, action)).toEqual(expected);
  });
});

test('other action', () => {
  const state: State = {
    game,
    questions,
    currentQuestion: 0,
    incorrectGuesses: [],
    score: 0,
  };

  expect(reducer(state, ({ type: 'OtheAction' } as unknown) as Action)).toEqual(state);
});
