import { Action, Actions } from './actions';
import { Type } from './types';

test('newGame', () => {
  const prompts = ['A', 'B', 'B', 'C', 'D', 'E', 'E', 'F', 'G', 'H', 'I', 'I', 'J'];
  const questionGen = jest.fn().mockImplementation(() => ({ prompt: prompts.shift(), answer: 1 }));

  const expected: Action = {
    type: Type.NewGame,
    payload: {
      game: 'TestGame',
      questions: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map(prompt => ({
        prompt,
        answer: 1,
      })),
    },
  };

  expect(Actions.newGame('TestGame', questionGen)).toEqual(expected);
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
