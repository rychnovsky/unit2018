import React, { Component } from 'react';
import {Wrap} from './styled'
import Logo from '../../components/Logo'
import {H1} from '../../common/typography'
import Skodik from '../../components/Skodik'

class StartInfo extends Component {
  render() {
    return (
<Wrap>
<Logo />
  <H1>Jsem tu pořád pro tebe!</H1>
  <Skodik />
  
</Wrap>
    );
  }
}

export default StartInfo;