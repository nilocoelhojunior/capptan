// @flow
import { call, put, takeLatest } from 'redux-saga/effects';

import SIGNUP from '../consts/signup.const';
import { requestSignUpError, requestSignupSuccess } from '../actions/signup.action';
import { singupAPI } from '../../api/signup.api';

function* signup({ payload }): any {
  try {
    const response = yield call(singupAPI, payload);
    yield put(requestSignupSuccess(response));
  } catch (e) {
    yield put(requestSignUpError(e));
  }
}

export default function* watchSignup(): any {
  yield takeLatest(SIGNUP.REQUEST, signup);
}
