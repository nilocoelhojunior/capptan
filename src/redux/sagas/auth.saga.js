// @flow
import { call, put, take } from 'redux-saga/effects';

import { requestLogin, requestLoginError, requestLoginSuccess } from '../actions/auth.action';
import { loginAPI } from '../../api/auth.api';

function* watchLogin(): any {
  while (true) {
    const action = yield take(requestLogin);
    try {
      const response = yield call(loginAPI, action.payload);
      yield put(requestLoginSuccess(response));
    } catch (e) {
      yield put(requestLoginError(e));
    }
  }
}

export default watchLogin;
