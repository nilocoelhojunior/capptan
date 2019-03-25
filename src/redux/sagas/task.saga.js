// @flow
import { call, put, takeLatest } from 'redux-saga/effects';

import TASK from '../consts/task.const';
import {
  requestTasksError,
  requestTasksSuccess,
  createTaskError,
  createTaskSuccess,
  updateTaskError,
  updateTaskSuccess,
} from '../actions/task.action';
import { fetchTasks, postTask, putTask } from '../../api/tasks.api';

function* tasks({ payload }): any {
  try {
    const response = yield call(fetchTasks, payload);

    yield put(requestTasksSuccess(response));
  } catch (e) {
    yield put(requestTasksError(e));
  }
}

function* createTask({ payload }): any {
  try {
    const response = yield call(postTask, payload);
    yield put(createTaskSuccess(response));
  } catch (e) {
    yield put(createTaskError(e));
  }
}

function* updateTask({ payload }): any {
  try {
    const response = yield call(putTask, payload);
    yield put(updateTaskSuccess(response));
  } catch (e) {
    yield put(updateTaskError(e));
  }
}

export default function* watchTasks(): any {
  yield takeLatest(TASK.TASKS_REQUEST, tasks);
  yield takeLatest(TASK.TASK_CREATE_REQUEST, createTask);
  yield takeLatest(TASK.TASK_UPDATE_REQUEST, updateTask);
}
