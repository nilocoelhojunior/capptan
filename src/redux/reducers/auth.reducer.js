// @flow

import AUTH from '../consts/auth.const';

import type { AuthStateType } from './auth.reducer.types';
import type { AuthActionsType } from '../actions/auth.action.types';

const initialState: AuthStateType = {
  user: null,
  isFetching: false,
  error: null,
};

export default (state: AuthStateType = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case AUTH.REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case AUTH.REQUEST_ERROR: {
      const { payload } = action;
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    }
    case AUTH.REQUEST_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        user: payload,
        isFetching: false,
        error: null,
      };
    }
    case AUTH.USER_LOGGED_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case AUTH.USER_LOGGED_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    }
    case AUTH.USER_LOGGED_SUCESS: {
      const { payload } = action;
      return {
        ...state,
        user: payload,
        isFetching: false,
        error: null,
      };
    }
    case AUTH.SIGNUP_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case AUTH.SIGNUP_REQUEST_ERROR: {
      const { payload } = action;
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    }
    case AUTH.SIGNUP_REQUEST_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        user: payload,
        isFetching: false,
        error: null,
      };
    }
    case AUTH.LOGOUT_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case AUTH.LOGOUT_REQUEST_SUCCESS: {
      return {
        ...state,
        user: null,
        isFetching: true,
        error: null,
      };
    }
    case AUTH.LOGOUT_REQUEST_ERROR: {
      const { payload } = action;
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    }
    default: {
      return state;
    }
  }
};
