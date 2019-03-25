// @flow

import LOGIN from '../consts/login.const';

import type { LoginStateType } from './login.reducer.types';
import type { LoginActionsType } from '../actions/login.action.types';

const initialState: LoginStateType = {
  user: null,
  isFetching: false,
  error: null,
};

export default (state: LoginStateType = initialState, action: LoginActionsType) => {
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
        error: null,
      };
    }
    case LOGIN.USER_LOGGED_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case LOGIN.USER_LOGGED_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    }
    case LOGIN.USER_LOGGED_SUCESS: {
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
