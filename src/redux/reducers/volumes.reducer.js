// @flow

import type { VolumeType } from './types/volumes.types';

const initialState: VolumeType = {
  data: [],
  isFetching: false,
  error: '',
};

export default (state: VolumeType = initialState, action: AppActionsType) => {
  switch (action.type) {
    case APP.TERMS.REQUEST: {
      return {
        ...state,
        terms: {
          ...state.terms,
          isFetching: true,
          error: null,
        },
      };
    }
  }
};
