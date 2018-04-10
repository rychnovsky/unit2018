import React, { Component } from 'react'
import { Wrap } from './styled'
import Logo from '../../components/Logo'
import { H1, Text } from '../../common/typography'
import Skodik from '../../components/Skodik'
import SkodikBtn from '../../components/SkodikBtn'

class StartInfo extends Component {
  render() {
    return (
      <Wrap>
        <Logo />
        <H1>Jsem tu pořád pro tebe!</H1>
        <Skodik />
        <Text>
          Kdykoliv si nebudeš vědět s něčím rady, budu tady pro tebe, stačí na mě kliknout v pravém
          dolním rohu.
        </Text>
        <Text>Pojďme to zkusit, klikni na mě!</Text>
        <SkodikBtn to="lisovna">Klikni na me</SkodikBtn>
      </Wrap>
    )
  }
}

export default StartInfo
