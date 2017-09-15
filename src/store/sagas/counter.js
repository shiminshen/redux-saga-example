import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import { INCREMENT } from '../reducers/counter.js'


export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: INCREMENT })
}

export function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}
