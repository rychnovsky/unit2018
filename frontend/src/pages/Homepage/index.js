import React, { Component } from 'react'
import { Wrap } from './styled'
import CTAlink from '../../components/CTAlink'
import { H1, H2, Text } from '../../common/typography'
import Skodik from '../../components/Skodik'
import Logo from '../../components/Logo'
import GlobalWrap from '../../components/GlobalWrap'

class Homepage extends Component {
  render() {
    return (
      <GlobalWrap>
        <Logo />
        <H1>Výroba auta se Škodíkem</H1>
        <Skodik />
        <Text center>Ahoj, já jsem Škodík!</Text>
        <Text center>Pojď se se mnou podívat, jak se vyrábí nové auto!</Text>
        <CTAlink to="/game" restricted>
          Pojďme začít
        </CTAlink>
      </GlobalWrap>
    )
  }
}

export default Homepage
