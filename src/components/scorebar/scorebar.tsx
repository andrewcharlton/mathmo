import * as React from 'react';
import { Label } from 'react-bootstrap';

import './scorebar.css';

export interface Props {
  score: number;
  roundsPlayed: number;
  maxRounds: number;
}

export const ScoreBar: React.SFC<Props> = props => (
  <div className="ScoreBar">
    <h3>
      Score: <Label bsStyle="success">{props.score}</Label>
    </h3>
    <h3>
      Question: <Label bsStyle="info">{props.roundsPlayed}</Label>
      {'/'}
      <Label bsStyle="info">{props.maxRounds}</Label>
    </h3>
  </div>
);
