import { fork } from 'redux-saga/effects';

import login from './login.saga';
import signup from './signup.saga';
import forgotPassword from './forgotPassword.saga';

export default function* rootSaga() {
  yield fork(login);
  yield fork(forgotPassword);
  yield fork(signup);
}
