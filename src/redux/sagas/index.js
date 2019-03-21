import { all, fork } from 'redux-saga/effects';

import watchLogin from './auth.saga';

export default function* rootSaga() {
  yield all([fork(watchLogin)]);
}
