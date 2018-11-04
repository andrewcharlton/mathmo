import * as React from 'react';

import './question.css';

export interface Props {
  question: string;
}

export const Question: React.SFC<Props> = props => <div className="Question">{props.question}</div>;
