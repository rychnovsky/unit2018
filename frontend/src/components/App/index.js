import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Homepage from '../../pages/Homepage'
import StartInfo from '../../pages/StartInfo'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/game" component={StartInfo} />
    </Switch>
  </BrowserRouter>
)

export default App
