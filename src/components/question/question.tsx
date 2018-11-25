import * as React from 'react';
import { connect } from 'react-redux';

import { Sounds } from '~/resources';
import { Selectors, State } from '~/state';

import './question.css';

export interface Props {
  prompt: string;
}

export class Question extends React.PureComponent<Props> {
  public componentDidUpdate() {
    Sounds.correct();
  }

  public render() {
    return <div className="Question">{this.props.prompt}</div>;
  }
}

const mapState = (state: State): Props => {
  const question = Selectors.getQuestion(state);
  return {
    prompt: (question && question.prompt) || '',
  };
};

export default connect(mapState)(Question);
