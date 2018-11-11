import { Action, Actions } from './actions';
import { reducer } from './reducer';
import { State } from './state';
import { Game, Type } from './types';

test('StartGame', () => {
  const action: Action = {
    type: Type.StartGame,
    payload: {
      game: Game.NumberBondsTo10,
      question: {
        prompt: '4 + ? = 10',
        answer: 6,
      },
    },
  };

  const expected: State = {
    game: Game.NumberBondsTo10,
    question: {
      prompt: '4 + ? = 10',
      answer: 6,
    },
    correct: false,
    wrongAnswers: [],
    score: 0,
    round: 1,
    maxRounds: 10,
    finished: false,
  };

  expect(reducer(undefined, action)).toEqual(expected);
});

test('NewQuestion', () => {
  const state: State = {
    game: Game.NumberBondsTo10,
    question: {
      prompt: '4 + ? = 10',
      answer: 6,
    },
    correct: true,
    wrongAnswers: [7],
    score: 4,
    round: 2,
    maxRounds: 10,
    finished: false,
  };

  const action: Action = {
    type: Type.NewQuestion,
    payload: {
      question: {
        prompt: '9 + ? = 10',
        answer: 1,
      },
    },
  };

  const expected: State = {
    game: Game.NumberBondsTo10,
    question: {
      prompt: '9 + ? = 10',
      answer: 1,
    },
    correct: false,
    wrongAnswers: [],
    score: 4,
    round: 3,
    maxRounds: 10,
    finished: false,
  };

  expect(reducer(state, action)).toEqual(expected);
});

describe('Guess', () => {
  const state: State = {
    game: Game.NumberBondsTo10,
    question: {
      prompt: '4 + ? = 10',
      answer: 6,
    },
    correct: false,
    wrongAnswers: [7],
    score: 6,
    round: 3,
    maxRounds: 10,
    finished: false,
  };

  test('correct guess marks as correct and increments score', () => {
    const action = Actions.guess(6);
    const expected: State = {
      ...state,
      correct: true,
      score: 8,
    };

    expect(reducer(state, action)).toEqual(expected);
  });

  test('correct guess on last round also marks game as finished', () => {
    const action = Actions.guess(6);
    const expected: State = {
      ...state,
      correct: true,
      score: 8,
      round: 10,
      finished: true,
    };

    expect(reducer({ ...state, round: 10 }, action)).toEqual(expected);
  });

  test('incorrect guess adds guess to wrong answers', () => {
    const action = Actions.guess(8);
    const expected: State = {
      ...state,
      correct: false,
      wrongAnswers: [7, 8],
    };

    expect(reducer(state, action)).toEqual(expected);
  });
});

test('other action', () => {
  const state: State = {
    game: Game.NumberBondsTo10,
    question: {
      prompt: '4 + ? = 10',
      answer: 6,
    },
    correct: false,
    wrongAnswers: [7],
    score: 6,
    round: 3,
    maxRounds: 10,
    finished: false,
  };

  expect(reducer(state, ({ type: 'OtheAction' } as unknown) as Action)).toEqual(state);
});
