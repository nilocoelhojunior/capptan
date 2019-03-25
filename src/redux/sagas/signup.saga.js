// @flow
import { call, put, takeLatest } from 'redux-saga/effects';

import SIGNUP from '../consts/signup.const';
import { requestSignUpError, requestSignupSuccess } from '../actions/signup.action';
import { singupAPI } from '../../api/signup.api';
import { setItem } from '../../utils/storage';

function* signup({ payload }): any {
  try {
    const response = yield call(singupAPI, payload);
    setItem('user', JSON.stringify(response));
    yield put(requestSignupSuccess(response));
  } catch (e) {
    yield put(requestSignUpError(e));
  }
}

export default function* watchSignup(): any {
  yield takeLatest(SIGNUP.REQUEST, signup);
}
