import { newQuestion } from './question';
import { Game } from './types';

const rnd = global.Math.random;
afterEach(() => {
  global.Math.random = rnd;
});

describe('NumberBondsTo10', () => {
  const testCases = [
    { rnd: 0.1, answer: 1, prompt: '9 + ? = 10' },
    { rnd: 0.2, answer: 2, prompt: '8 + ? = 10' },
    { rnd: 0.99, answer: 10, prompt: '0 + ? = 10' },
  ];

  for (const tc of testCases) {
    test(tc.prompt, () => {
      global.Math.random = () => tc.rnd;
      const question = newQuestion(Game.NumberBondsTo10);
      expect(question.prompt).toEqual(tc.prompt);
      expect(question.answer).toEqual(tc.answer);
    });
  }
});
