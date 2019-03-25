// @flow

import APP from '../consts/app.const';

import type { AppStateType } from './app.reducer.types';
import type { AppActionsType } from '../actions/app.action.types';

const initialState: AppStateType = {
  route: '',
};

export default (state: AppStateType = initialState, action: AppActionsType) => {
  switch (action.type) {
    case APP.CHANGE_ROUTE: {
      const { payload } = action;
      return {
        ...state,
        route: payload,
      };
    }
    default: {
      return state;
    }
  }
};
