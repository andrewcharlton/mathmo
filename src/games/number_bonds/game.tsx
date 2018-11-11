import * as React from 'react';

import { NumberPicker, Question, ScoreBar } from '~/components';

import './game.css';

export const Game: React.SFC = () => {
  return (
    <div className="NumberBondsGame">
      <h2>Number Bonds</h2>

      <div className="NumberBondsGameContent">
        <Question />
        <NumberPicker min={0} max={10} />
      </div>
      <div className="NumberBondsGameFooter">
        <ScoreBar />
      </div>
    </div>
  );
};
