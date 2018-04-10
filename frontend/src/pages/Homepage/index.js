import React, { Component } from 'react'
import { Wrap } from './styled'
import CTAlink from '../../components/CTAlink'
import { H1, H2 } from '../../common/typography'
import Skodik from '../../components/Skodik'
import Logo from '../../components/Logo'

class Homepage extends Component {
  render() {
    return (
      <Wrap>
        <Logo />
        <H1>Výroba auta se škodíkem</H1>
        <Skodik />
        <H2>Ahoj, já jsem Škodík!</H2>
        <H2>Pojď se se mnou podívat, jak se vyrábí nové auto!</H2>
        <CTAlink to="/game" restricted>
          Pojďme začít
        </CTAlink>
      </Wrap>
    )
  }
}

export default Homepage
