// @flow

import SIGNUP from '../consts/signup.const';

import type { LoginStateType } from './login.reducer.types';
import type { SignupActionsType } from '../actions/signup.action.types';

const initialState: LoginStateType = {
  user: null,
  isFetching: false,
  error: null,
};

export default (state: LoginStateType = initialState, action: SignupActionsType) => {
  switch (action.type) {
    case SIGNUP.REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case SIGNUP.REQUEST_ERROR: {
      const { payload } = action;
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    }
    case SIGNUP.REQUEST_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        user: payload,
        isFetching: false,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
};
