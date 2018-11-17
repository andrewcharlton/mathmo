import * as React from 'react';
import { connect } from 'react-redux';

import { Selectors, State } from '~/state';

import './page.css';

export interface Props {
  score: number;
}

export const Page: React.SFC<Props> = props => <div className="GameOverPage">{props.score}</div>;

const mapState = (state: State): Props => ({
  score: Selectors.getScore(state),
});

export default connect(mapState)(Page);
