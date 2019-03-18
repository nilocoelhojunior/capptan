// @flow
import { call, put, takeLatest } from 'redux-saga/effects';

import { requestLogin, requestLoginError, requestLoginSuccess } from '../actions/auth.action';
import { loginAPI } from '../../api/auth.api';

import type { LoginType } from '../../api/types/auth.type';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* handleLogin(body: LoginType) {
  console.log(body);
  try {
    const response = yield call(loginAPI(body));
    yield put(requestLoginSuccess(response));
  } catch (e) {
    yield put(requestLoginError(e));
  }
}

function* login(): any {
  yield takeLatest(requestLogin, handleLogin);
}

export default login;
