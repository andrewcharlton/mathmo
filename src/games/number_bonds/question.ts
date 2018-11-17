import { Question } from '~/models';

export const newQuestion = (): Question => {
  const answer = Math.floor(Math.random() * 11);
  return {
    prompt: `${10 - answer} + ? = 10`,
    answer,
  };
};
