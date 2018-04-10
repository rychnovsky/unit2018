import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Homepage from '../../pages/Homepage'
import StartInfo from '../../pages/StartInfo'
import Lisovna from '../../pages/Lisovna'
import LisovnaHra from '../../pages/LisovnaHra'
import Svarovna from '../../pages/Svarovna'
import SvarovnaHra from '../../pages/SvarovnaHra'
import Lakovna from '../../pages/Lakovna'
import LakovnaHra from '../../pages/LakovnaHra'
import Montaz from '../../pages/Montaz'
import MontazHra from '../../pages/MontazHra'
import Kontrola from '../../pages/Kontrola'
import KontrolaHra from '../../pages/KontrolaHra'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/game" component={StartInfo} />
      <Route path="/lisovna" component={Lisovna} />
      <Route path="/lisovna-hra" component={LisovnaHra} />
      <Route path="/svarovna" component={Svarovna} />
      <Route path="/svarovna-hra" component={SvarovnaHra} />
      <Route path="/lakovna" component={Lakovna} />
      <Route path="/lakovna-hra" component={LakovnaHra} />
      <Route path="/montaz" component={Montaz} />
      <Route path="/montaz-hra" component={MontazHra} />
      <Route path="/kontrola" component={Kontrola} />
      <Route path="/kontrola-hra" component={KontrolaHra} />
    </Switch>
  </BrowserRouter>
)

export default App
