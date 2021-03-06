import { shallow } from 'enzyme';
import * as React from 'react';

import { Props, Question } from './question';

const testProps = (): Props => ({
  prompt: '7 + ? = 10',
});

test('renders without crashing', () => {
  shallow(<Question {...testProps()} />);
});
