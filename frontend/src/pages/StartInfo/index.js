import React, { Component } from 'react'
import { Wrap } from './styled'
import Logo from '../../components/Logo'
import { H1, Text } from '../../common/typography'
import Skodik from '../../components/Skodik'
import SkodikBtn from '../../components/SkodikBtn'
import GlobalWrap from '../../components/GlobalWrap'

class StartInfo extends Component {
  render() {
    return (
      <GlobalWrap>
        <Logo />
        <H1>Jsem tu pořád pro tebe!</H1>
        <Skodik />
        <Text center>
          Kdykoliv si nebudeš vědět s něčím rady, budu tady pro tebe, stačí na mě kliknout v pravém
          dolním rohu.
        </Text>
        <Text center>Pojďme to zkusit, klikni na mě!</Text>
        <SkodikBtn to="lisovna">Klikni na mě</SkodikBtn>
      </GlobalWrap>
    )
  }
}

export default StartInfo
