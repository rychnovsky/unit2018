import React, { Component } from 'react'
import GlobalWrap from '../../components/GlobalWrap'
import Logo from '../../components/Logo'
import { H1 } from '../../common/typography'
import { ImageWrap } from './styled'
import ColorBox from './Colors'
import CTAlink from '../../components/CTAlink'
import SkodikHelp from '../../components/SkodikHelp'
import Image from './carIco'

class LakovnaHra extends Component {
  constructor() {
    super();

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

    let skodik
    if (this.state.success === true) {
      skodik = (
        <SkodikHelp
          to="/montaz"
          visible
          linkText="Pokračovat"
          title1="Správně, skvělá barva!"
          text1="Chceš pokračovat dále?"
        />
      )
    } else {
      skodik = (
        <SkodikHelp
          onClick={() => {
            this.setState({ success: null })
          }}
          visible={false}
          linkText="Už vím!"
          title1="Ovládání hry"
          text1="Jen si vybereš barvu hry, vyber si takovou, která se ti líbí."
          title2="Jaká barva?"
          text2="Je úplně jedno, jakou barvu vybereš, kažád je správná."
        />
      )
    }

    return (
      <GlobalWrap>
        <Logo />
        <H1>Vyber si barvu auta</H1>
        <ImageWrap>
          <Image />
        </ImageWrap>
        <ColorBox />
        <CTAlink onClick={this.handleClick}>Tuhle barvu chci</CTAlink>
        {skodik}
      </GlobalWrap>
    )
  }
}

export default LakovnaHra
