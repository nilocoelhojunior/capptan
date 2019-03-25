// @flow
import { call, put, takeLatest } from 'redux-saga/effects';

import AUTH from '../consts/auth.const';
import {
  requestLoginError,
  requestLoginSuccess,
  requestUserLoggedSuccess,
  requestUserLoggedError,
  requestSignUpError,
  requestSignupSuccess,
  requestLogoutSuccess,
  requestLogoutError,
} from '../actions/auth.action';
import { loginAPI, singupAPI } from '../../api/auth.api';
import { getItem, setItem, removeItem } from '../../utils/storage';

function* login({ payload }): any {
  try {
    const response = yield call(loginAPI, payload);
    setItem('user', JSON.stringify(response));
    yield put(requestLoginSuccess(response));
  } catch (e) {
    yield put(requestLoginError(e));
  }
}

function* userLogged(): any {
  try {
    let response = yield call(getItem, 'user');
    response = JSON.parse(response);
    yield put(requestUserLoggedSuccess(response));
  } catch (e) {
    yield put(requestUserLoggedError(e));
  }
}

function* signup({ payload }): any {
  try {
    const response = yield call(singupAPI, payload);
    setItem('user', JSON.stringify(response));
    yield put(requestSignupSuccess(response));
  } catch (e) {
    yield put(requestSignUpError(e));
  }
}

function* logout(): any {
  try {
    removeItem('user');
    yield put(requestLogoutSuccess());
  } catch (e) {
    yield put(requestLogoutError(e));
  }
}

export default function* watchLogin(): any {
  yield takeLatest(AUTH.REQUEST, login);
  yield takeLatest(AUTH.USER_LOGGED_REQUEST, userLogged);
  yield takeLatest(AUTH.SIGNUP_REQUEST, signup);
  yield takeLatest(AUTH.LOGOUT_REQUEST, logout);
}
