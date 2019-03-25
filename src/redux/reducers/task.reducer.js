// @flow

import TASK from '../consts/task.const';

import type { TaskStateType } from './task.reducer.types';
import type { TaskActionsType } from '../actions/task.action.types';
import type { TaskType } from '../../api/types/task.types';

const initialState: TaskStateType = {
  tasks: [],
  isFetching: false,
  error: null,
};

export default (state: TaskStateType = initialState, action: TaskActionsType) => {
  switch (action.type) {
    case TASK.TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case TASK.TASKS_REQUEST_ERROR: {
      const { payload } = action;
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    }
    case TASK.TASKS_REQUEST_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        tasks: payload,
        isFetching: false,
        error: null,
      };
    }
    case TASK.TASK_CREATE_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case TASK.TASK_CREATE_REQUEST_ERROR: {
      const { payload } = action;
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    }
    case TASK.TASK_CREATE_REQUEST_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        tasks: state.tasks.concat(payload),
        isFetching: false,
        error: null,
      };
    }
    case TASK.TASK_UPDATE_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case TASK.TASK_UPDATE_REQUEST_ERROR: {
      const { payload } = action;
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    }
    case TASK.TASK_UPDATE_REQUEST_SUCCESS: {
      const { payload } = action;
      const tasks = state.tasks.filter(element => element.id !== payload.id);
      return {
        ...state,
        tasks,
        isFetching: false,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
};
