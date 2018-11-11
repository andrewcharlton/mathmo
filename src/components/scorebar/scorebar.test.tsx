import { shallow } from 'enzyme';
import * as React from 'react';

import { Props, ScoreBar } from './scorebar';

const testProps = (): Props => ({
  score: 5,
  round: 3,
  maxRounds: 10,
});

test('renders without crashing', () => {
  shallow(<ScoreBar {...testProps()} />);
});
