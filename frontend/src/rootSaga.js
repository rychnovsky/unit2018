import productSaga from './data/Product/sagas'
import { fork } from 'redux-saga/effects'

const sagas = [productSaga]

export default function* rootSaga() {
  yield sagas.map(saga => fork(saga))
}
