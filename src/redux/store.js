import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './reducers';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware, createLogger()))
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
