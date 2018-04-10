import React, { Component } from 'react'
import GlobalWrap from '../../components/GlobalWrap'
import Logo from '../../components/Logo'
import { H1 } from '../../common/typography'
import { Img } from './styled'
import Gif from '../../assets/img/unit_gif.gif'
import CTAlink from '../../components/CTAlink'

class SvarovnaHra extends Component {
  render() {
    return (
      <GlobalWrap>
        <Logo />
        <video src={imgLink} />
        <H1>Pojď si zkusit svařování!</H1>
        <Img src={Gif} />
        <CTAlink to="lakovna">Skvělé, vzhůru do lakovny</CTAlink>
      </GlobalWrap>
    )
  }
}

export default SvarovnaHra
