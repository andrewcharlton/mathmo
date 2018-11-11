import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Action, reducer, State } from '~/state';
import { App } from './app';

const store = createStore<State, Action, {}, {}>(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
