import { takeLatest, call, put, select } from 'redux-saga/effects'
import { LOAD_ALL_PRODUCTS, LOAD_PRODUCT } from './constants'
import {
  loadProductsSuccess,
  loadProductsFail,
  loadProductSuccess,
  loadProductFail,
} from './actions'
import { selectProductId } from './selectors'

import { getAllPosts, getPost } from '../../api'

export default function* getUsersSaga() {
  yield takeLatest(LOAD_ALL_PRODUCTS, fetchProducts)
  yield takeLatest(LOAD_PRODUCT, fetchProduct)
}

function* fetchProducts() {
  try {
    const results = yield call(getAllPosts)
    yield put(loadProductsSuccess(results))
  } catch (error) {
    console.log(error)
    yield put(loadProductsFail(error.message))
  }
}

function* fetchProduct() {
  const id = yield select(selectProductId)
  try {
    const results = yield call(getPost, id)
    yield put(loadProductSuccess(results))
  } catch (error) {
    console.log(error)
    yield put(loadProductFail(error.message))
  }
}
