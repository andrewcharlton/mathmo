import * as React from 'react';

import { NumberPicker, Question, ScoreBar } from '~/components';

import './game.css';

export const Game: React.SFC = () => {
  const numbers = [
    { n: 0 },
    { n: 1 },
    { n: 2 },
    { n: 3 },
    { n: 4 },
    { n: 5 },
    { n: 6 },
    { n: 7 },
    { n: 8, disabled: true },
    { n: 9 },
    { n: 10 },
  ];

  return (
    <div className="NumberBondsGame">
      <h2>Number Bonds</h2>

      <div className="NumberBondsGameContent">
        <Question question="3 + ? = 10" />
        <NumberPicker items={numbers} />
      </div>
      <div className="NumberBondsGameFooter">
        <ScoreBar score={8} roundsPlayed={3} maxRounds={10} />
      </div>
    </div>
  );
};
