import { shallow } from 'enzyme';
import * as React from 'react';

import { NumberPicker, Props } from './number_picker';

const testProps = (): Props => ({
  items: [{ n: 1 }, { n: 2, disabled: true }, { n: 3 }],
});

test('renders without crashing', () => {
  shallow(<NumberPicker {...testProps()} />);
});
