// @flow
import { call, put, takeLatest } from 'redux-saga/effects';

import FORGOT_PASSWORD from '../consts/forgotPassword.const';
import {
  requestForgotPasswordError,
  requestForgotPasswordSuccess,
} from '../actions/forgotPassword.action';
import { forgotPasswordAPI } from '../../api/forgotPassword.api';

function* forgotPassword({ payload }): any {
  try {
    const response = yield call(forgotPasswordAPI, payload);
    yield put(requestForgotPasswordSuccess(response));
  } catch (e) {
    yield put(requestForgotPasswordError(e));
  }
}

export default function* watchForgotPassword(): any {
  yield takeLatest(FORGOT_PASSWORD.REQUEST, forgotPassword);
}
