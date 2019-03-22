// @flow
import SIGNUP from '../consts/signup.const';

import type { UserType } from '../../api/types/user.types';
import type { ErrorType } from '../../api/types/error.types';

export type RequestSignupType = {
  type: SIGNUP.REQUEST,
  payload: UserType,
};

export type RequestSignupSuccessType = {
  type: SIGNUP.REQUEST_SUCCESS,
  payload: UserType,
};

export type RequestSignupErrorType = {
  type: SIGNUP.REQUEST_ERROR,
  payload: ErrorType,
};

export type SignupActionsType =
  | RequestSignupType
  | RequestSignupErrorType
  | RequestSignupSuccessType;
