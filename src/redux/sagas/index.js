import { fork } from 'redux-saga/effects';

import auth from './auth.saga';
import forgotPassword from './forgotPassword.saga';
import task from './task.saga';

export default function* rootSaga() {
  yield fork(auth);
  yield fork(forgotPassword);
  yield fork(task);
}
