import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Homepage from '../../pages/Homepage'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  </BrowserRouter>
)

export default App
