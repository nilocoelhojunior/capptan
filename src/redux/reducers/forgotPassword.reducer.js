// @flow

import FORGOT_PASSWORD from '../consts/forgotPassword.const';

import type { ForgotPasswordStateType } from './forgotPassword.reducer.types';
import type { ForgotPasswordActionsType } from '../actions/forgotPassword.action.types';

const initialState: ForgotPasswordStateType = {
  emailSend: false,
  isFetching: false,
  error: null,
};

export default (
  state: ForgotPasswordStateType = initialState,
  action: ForgotPasswordActionsType
) => {
  switch (action.type) {
    case FORGOT_PASSWORD.REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case FORGOT_PASSWORD.REQUEST_ERROR: {
      const { payload } = action;
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    }
    case FORGOT_PASSWORD.REQUEST_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        emailSend: payload,
        isFetching: false,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
};
