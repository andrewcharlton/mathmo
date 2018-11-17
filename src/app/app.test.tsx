import { shallow } from 'enzyme';
import * as React from 'react';

import { App } from './app';

test('renders without crashing', () => {
  shallow(<App isFinished={false} />);
});
