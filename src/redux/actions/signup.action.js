// @flow
import SIGNUP from '../consts/signup.const';

import type {
  RequestSignupType,
  RequestSignupErrorType,
  RequestSignupSuccessType,
} from './signup.action.types';
import type { UserType } from '../../api/types/user.types';
import type { ErrorType } from '../../api/types/error.types';

export const requestSignup = (data: UserType): RequestSignupType => ({
  type: SIGNUP.REQUEST,
  payload: data,
});

export const requestSignupSuccess = (data: UserType): RequestSignupSuccessType => ({
  type: SIGNUP.REQUEST_SUCCESS,
  payload: data,
});

export const requestSignUpError = (data: ErrorType): RequestSignupErrorType => ({
  type: SIGNUP.REQUEST_ERROR,
  payload: data,
});
