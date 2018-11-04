import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';

import './app.css';

import { Game } from '~/games/number_bonds/game';

export const App: React.SFC = () => (
  <Jumbotron className="App">
    <h1>MathMo</h1>
    <Game />
  </Jumbotron>
);
