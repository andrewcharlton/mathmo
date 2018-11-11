import * as React from 'react';
import { Label } from 'react-bootstrap';
import { connect } from 'react-redux';

import { Selectors, State } from '~/state';

import './scorebar.css';

export interface Props {
  score: number;
  round: number;
  maxRounds: number;
}

export const ScoreBar: React.SFC<Props> = props => (
  <div className="ScoreBar">
    <h3>
      Score: <Label bsStyle="success">{props.score}</Label>
    </h3>
    <h3>
      Question: <Label bsStyle="info">{props.round}</Label>
      {'/'}
      <Label bsStyle="info">{props.maxRounds}</Label>
    </h3>
  </div>
);

const mapState = (state: State): Props => ({
  score: Selectors.getScore(state),
  round: Selectors.getRound(state),
  maxRounds: Selectors.getMaxRounds(state),
});

export default connect(mapState)(ScoreBar);
