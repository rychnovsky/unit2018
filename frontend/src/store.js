import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import productsReducers from './data/Product/reducers'
import rootSaga from './rootSaga'

const rootReducer = combineReducers({
  product: productsReducers,
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
export default store
