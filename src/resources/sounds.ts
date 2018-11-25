import correct from './correct.mp3';
import error from './error.mp3';
import game_over from './game_over.mp3';

const correctAudio = new Audio(correct);
const errorAudio = new Audio(error);
const gameOverAudio = new Audio(game_over);

const play = (audio: HTMLAudioElement) => {
  audio.load();
  audio.play();
};

export const Sounds = {
  correct: () => play(correctAudio),
  error: () => play(errorAudio),
  game_over: () => play(gameOverAudio),
};
