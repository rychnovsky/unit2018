import React, { Component } from 'react'
import GlobalWrap from '../../components/GlobalWrap'
import Logo from '../../components/Logo'
import { H1 } from '../../common/typography'
import { ImageWrap } from './styled'
import ColorBox from './Colors'
import CTAlink from '../../components/CTAlink'
import SkodikHelp from '../../components/SkodikHelp'

class LakovnaHra extends Component {
  constructor() {
    super()

    this.state = {
      success: false,
    }
  }

  handleClick = () => {
    this.setState({
      success: true,
    })
  }

  render() {
    return (
      <GlobalWrap>
        <Logo />
        <H1>Vyber si barvu auta</H1>
        <ImageWrap />
        <ColorBox />
        <CTAlink onClick={this.handleClick}>Tuhle barvu chci</CTAlink>
        <SkodikHelp showDialog={this.state} />
      </GlobalWrap>
    )
  }
}

export default LakovnaHra
