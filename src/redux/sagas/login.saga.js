// @flow
import { call, put, takeLatest } from 'redux-saga/effects';

import LOGIN from '../consts/login.const';
import { requestLoginError, requestLoginSuccess } from '../actions/login.action';
import { loginAPI } from '../../api/login.api';

function* login({ payload }): any {
  try {
    const response = yield call(loginAPI, payload);
    yield put(requestLoginSuccess(response));
  } catch (e) {
    yield put(requestLoginError(e));
  }
}

export default function* watchLogin(): any {
  yield takeLatest(LOGIN.REQUEST, login);
}
