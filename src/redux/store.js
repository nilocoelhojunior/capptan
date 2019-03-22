import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware, createLogger()))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
