import { shallow } from 'enzyme';
import * as React from 'react';

import { Game } from './game';

test('renders without crashing', () => {
  shallow(<Game />);
});
