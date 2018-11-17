import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';

import { GameOverPage } from '~/components';
import { Game } from '~/games/number_bonds/game';
import { Selectors, State } from '~/state';

import './app.css';

interface Props {
  isFinished: boolean;
}

export const App: React.SFC<Props> = props => (
  <Jumbotron className="App">
    <h1>MathMo</h1>
    {props.isFinished ? <GameOverPage /> : <Game />}
  </Jumbotron>
);

const mapState = (state: State): Props => ({
  isFinished: Selectors.isComplete(state),
});

export default connect(mapState)(App);
