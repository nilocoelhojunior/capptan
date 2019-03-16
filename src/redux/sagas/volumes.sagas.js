import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { volumes } from '../../api/volumes.api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchVolumes() {
  try {
    const response = yield call(volumes('Design Books'));
    yield put({ type: 'VOLUMES_FETCH_SUCCEEDED', response });
  } catch (e) {
    yield put({ type: 'VOLUMES_FETCH_FAILED', message: e.message });
  }
}

function* requestVolumes() {
  yield takeLatest('VOLUMES_FETCH_REQUESTED', fetchVolumes);
}

export default requestVolumes;
