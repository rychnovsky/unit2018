import {
  LOAD_ALL_PRODUCTS,
  LOAD_ALL_PRODUCTS_SUCCESS,
  LOAD_ALL_PRODUCTS_FAIL,
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_FAIL,
  SET_PRODUCT_ID,
} from './constants'

export const loadProducts = data => ({
  type: LOAD_ALL_PRODUCTS,
  payload: data,
})

export const loadProductsSuccess = data => ({
  type: LOAD_ALL_PRODUCTS_SUCCESS,
  payload: data,
})

export const loadProductsFail = data => ({
  type: LOAD_ALL_PRODUCTS_FAIL,
  payload: data,
})

/* single product */

export const loadProduct = data => ({
  type: LOAD_PRODUCT,
  payload: data,
})

export const loadProductSuccess = data => ({
  type: LOAD_PRODUCT_SUCCESS,
  payload: data,
})

export const loadProductFail = data => ({
  type: LOAD_PRODUCT_FAIL,
  payload: data,
})

export const setProductId = id => ({
  type: SET_PRODUCT_ID,
  payload: id,
})
