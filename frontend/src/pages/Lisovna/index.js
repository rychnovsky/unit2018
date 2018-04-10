import React, { Component } from 'react'
import Logo from '../../components/Logo'
import GlobalWrap from '../../components/GlobalWrap'
import { H1, Text } from '../../common/typography'
import CTAlink from '../../components/CTAlink'
import LisovnaAnim from '../../components/LisovnaAnim'
import ImageHeader from '../../components/ImageHeader'
import ImgLink from '../../assets/img/škoďáček.svg'

class Lisovna extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }

  setLoaded = () => {
    if (!this.state.loaded) {
      this.setState({
        loaded: true,
      })
    }
  }

  componentDidMount() {
    setTimeout(this.setLoaded, 2500)
  }

  render() {
    if (!this.state.loaded) {
      return <LisovnaAnim />
    }
    return (
      <GlobalWrap>
        <Logo />
        <ImageHeader src={ImgLink} />
        <H1>Lisovna</H1>
        <Text>Zde každé auto začíná. Stroje z plechů lisují jednotlivé díly karoserie.</Text>
        <Text>Věděl jsi, že jeden díl zvládne robot vyrobit za 20 sekund?</Text>
        <Text>Na jednom auto je potřeba až 60 dílů.</Text>
        <CTAlink to="/lisovna-hra">Do lisovny</CTAlink>
      </GlobalWrap>
    )
  }
}

export default Lisovna
