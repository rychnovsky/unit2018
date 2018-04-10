import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './global-styles'
import Aps from './components/App'

ReactDOM.render(
  <Provider store={store}>
    <Aps />
  </Provider>,
  document.getElementById('root')
)
