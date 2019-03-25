import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';
import auth from './middleware/auth';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware, createLogger(), auth))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
