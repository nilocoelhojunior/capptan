// @flow
import { call, put, takeLatest } from 'redux-saga/effects';

import LOGIN from '../consts/login.const';
import {
  requestLoginError,
  requestLoginSuccess,
  requestUserLoggedSuccess,
  requestUserLoggedError,
} from '../actions/login.action';
import { loginAPI } from '../../api/login.api';
import { getItem, setItem } from '../../utils/storage';

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

export default function* watchLogin(): any {
  yield takeLatest(LOGIN.REQUEST, login);
  yield takeLatest(LOGIN.USER_LOGGED_REQUEST, userLogged);
}
