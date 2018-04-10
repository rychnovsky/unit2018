import React, { Component } from 'react'
import GlobalWrap from '../../components/GlobalWrap'
import Logo from '../../components/Logo'
import { H1 } from '../../common/typography'
import { ImageWrap } from './styled'

class LakovnaHra extends Component {



  render() {
    return (
      <GlobalWrap>
        <Logo />
        <H1>Vyber si barvu auta</H1>
        <ImageWrap />

      </GlobalWrap>
    )
  }
}

export default LakovnaHra
