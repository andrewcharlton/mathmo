import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { Actions, Selectors, State } from '~/state';

import './number_picker.css';

interface OwnProps {
  min: number;
  max: number;
}

interface StateProps {
  items: Array<{ n: number; disabled?: boolean }>;
}

interface DispatchProps {
  guess: (n: number) => void;
}

export type Props = StateProps & DispatchProps;

export const NumberPicker: React.SFC<Props> = props => (
  <div className="NumberPicker">
    {props.items.map(item => (
      <Button
        key={`button${item.n}`}
        bsStyle="info"
        bsSize="large"
        disabled={!!item.disabled}
        onClick={() => props.guess(item.n)}
      >
        {item.n}
      </Button>
    ))}
  </div>
);

export const mapState = (state: State, ownProps: OwnProps): StateProps => {
  const wrongAnswers = Selectors.getWrongAnswers(state);

  const items = [];
  for (let i = ownProps.min; i <= ownProps.max; i++) {
    items.push({ n: i, disabled: wrongAnswers.indexOf(i) > -1 });
  }

  return { items };
};

const actions: DispatchProps = {
  guess: Actions.guess,
};

export default connect(
  mapState,
  actions,
)(NumberPicker);
