import * as React from 'react';
import { Button } from 'react-bootstrap';

import './number_picker.css';

export interface Item {
  n: number;
  disabled?: boolean;
}

export interface Props {
  items: Item[];
}

export const NumberPicker: React.SFC<Props> = props => (
  <div className="NumberPicker">
    {props.items.map(item => (
      <Button key={`button${item.n}`} bsStyle="info" bsSize="large" disabled={!!item.disabled}>
        {item.n}
      </Button>
    ))}
  </div>
);
