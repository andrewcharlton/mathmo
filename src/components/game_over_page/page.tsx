import * as React from 'react';
import { connect } from 'react-redux';

import { Sounds } from '~/resources';
import { Selectors, State } from '~/state';

import './page.css';

export interface Props {
  score: number;
}

export class Page extends React.PureComponent<Props> {
  public componentDidMount() {
    Sounds.game_over();
  }

  public render() {
    return (
      <div className="GameOverPage">
        <div className="GameOverPageHeader">Well done Amelia!</div>
        <div className="GameOverText">You scored:</div>
        <div className="GameOverPageScore">
          <div>{this.props.score}</div>
        </div>
      </div>
    );
  }
}

const mapState = (state: State): Props => ({
  score: Selectors.getScore(state),
});

export default connect(mapState)(Page);
