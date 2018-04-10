import {
  LOAD_ALL_PRODUCTS,
  LOAD_ALL_PRODUCTS_SUCCESS,
  LOAD_ALL_PRODUCTS_FAIL,
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_FAIL,
  SET_PRODUCT_ID,
} from './constants'
import { merge } from 'ramda'

const initState = {
  products: [],
  loadingAll: false,
  loadedAll: false,
  product: {},
  loadingOne: false,
  loadedOne: false,
  productId: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_ALL_PRODUCTS:
      return merge(state, {
        loadedAll: false,
        loadingAll: true,
      })
    case LOAD_ALL_PRODUCTS_SUCCESS:
      return merge(state, {
        products: action.payload,
        loadingAll: false,
        loadedAll: true,
      })
    case LOAD_ALL_PRODUCTS_FAIL:
      return merge(state, {
        product: {},
        loadingAll: false,
        loadedAll: false,
      })
    case LOAD_PRODUCT:
      return merge(state, {
        loadedOne: false,
        loadingOne: true,
      })
    case LOAD_PRODUCT_SUCCESS:
      return merge(state, {
        loadedOne: true,
        loadingOne: false,
        product: action.payload,
      })
    case LOAD_PRODUCT_FAIL:
      return merge(state, {
        product: {},
        loadingOne: false,
        loadedOne: false,
      })
    case SET_PRODUCT_ID:
      return merge(state, {
        productId: action.payload,
      })
    default:
      return state
  }
}

export default reducer
