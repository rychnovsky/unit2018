import React, { Component } from 'react'
import GlobalWrap from '../../components/GlobalWrap'
import Logo from '../../components/Logo'
import { H1 } from '../../common/typography'
import { ImageWrap } from './styled'
import ColorBox from './Colors'
import CTAlink from '../../components/CTAlink'
import SkodikHelp from '../../components/SkodikHelp'

class LakovnaHra extends Component {
  render() {
    return (
      <GlobalWrap>
        <Logo />
        <H1>Vyber si barvu auta</H1>
        <ImageWrap />
        <ColorBox />
        <CTAlink to="/necodalsihonevimco">Tuhle barvu chci</CTAlink>
        <SkodikHelp />
      </GlobalWrap>
    )
  }
}

export default LakovnaHra
