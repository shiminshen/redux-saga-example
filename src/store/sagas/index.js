import { watchIncrementAsync } from './counter.js'
export default function* rootSaga() {
  yield [
    watchIncrementAsync()
  ]
}
