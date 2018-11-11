import * as React from 'react';
import { connect } from 'react-redux';

import { Selectors, State } from '~/state';

import './question.css';

export interface Props {
  prompt: string;
}

export const Question: React.SFC<Props> = props => <div className="Question">{props.prompt}</div>;

const mapState = (state: State): Props => ({
  prompt: Selectors.getQuestion(state).prompt,
});

export default connect(mapState)(Question);
