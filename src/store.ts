import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import { createLogger } from 'redux-logger';

import { Name, newQuestion } from '~/games/number_bonds';
import { Actions, reducer, State } from '~/state';

const isDevelopment = process.env.NODE_ENV === 'development';

export const initStore = (): Store<State> => {
  const middleware: Middleware[] = [];
  if (isDevelopment) {
    middleware.push(createLogger());
  }

  const store = createStore<State>(reducer, applyMiddleware(...middleware));

  store.dispatch(Actions.newGame(Name, newQuestion));
  return store;
};
