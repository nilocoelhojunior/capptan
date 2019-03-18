// @flow

import { LOGIN } from '../consts/auth.const';

import type { AuthStateType } from './auth.reducer.types';
import type { AuthActionsType } from '../actions/auth.action.types';

const initialState: AuthStateType = {
  user: null,
  isFetching: false,
  error: null,
};

export default (state: AuthStateType = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case LOGIN.REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case LOGIN.REQUEST_ERROR: {
      const { payload } = action;
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    }
    case LOGIN.REQUEST_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        user: payload,
        isFetching: false,
        error: payload,
      };
    }
    default: {
      return state;
    }
  }
};
