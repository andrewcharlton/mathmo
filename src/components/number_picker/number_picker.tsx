import * as React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { Sounds } from '~/resources';
import { Actions, Selectors, State } from '~/state';

import './number_picker.css';

interface OwnProps {
  min: number;
  max: number;
}

interface StateProps {
  hasErrors: boolean;
  items: Array<{ n: number; disabled?: boolean }>;
}

interface DispatchProps {
  guess: (n: number) => void;
}

export type Props = StateProps & DispatchProps;

export class NumberPicker extends React.PureComponent<Props> {
  public componentDidUpdate() {
    if (this.props.hasErrors) {
      Sounds.error();
    }
  }
  public render() {
    return (
      <div className="NumberPicker">
        {this.props.items.map(item => (
          <Button
            key={`button${item.n}`}
            bsStyle="info"
            bsSize="large"
            disabled={!!item.disabled}
            onClick={this.onClick(item.n)}
            className={!!item.disabled ? 'btn-outline-info' : ''}
          >
            {item.n}
          </Button>
        ))}
      </div>
    );
  }

  private onClick = (n: number) => () => this.props.guess(n);
}

export const mapState = (state: State, ownProps: OwnProps): StateProps => {
  const incorrectGuesses = Selectors.getIncorrectGuesses(state);

  const items = [];
  for (let i = ownProps.min; i <= ownProps.max; i++) {
    items.push({ n: i, disabled: incorrectGuesses.indexOf(i) > -1 });
  }

  return {
    hasErrors: incorrectGuesses.length > 0,
    items,
  };
};

const actions: DispatchProps = {
  guess: Actions.guess,
};

export default connect(
  mapState,
  actions,
)(NumberPicker);
