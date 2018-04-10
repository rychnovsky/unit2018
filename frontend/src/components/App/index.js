import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Homepage from '../../pages/Homepage'
import StartInfo from '../../pages/StartInfo'
import Lisovna from '../../pages/Lisovna'
import LisovnaHra from '../../pages/LisovnaHra'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/game" component={StartInfo} />
      <Route path="/lisovna" component={Lisovna} />
      <Route path="/lisovna-hra" component={LisovnaHra} />
    </Switch>
  </BrowserRouter>
)

export default App
