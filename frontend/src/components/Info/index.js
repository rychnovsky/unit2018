import React, { Component } from 'react'
import Logo from '../../components/Logo'
import GlobalWrap from '../../components/GlobalWrap'
import { H1, Text } from '../../common/typography'
import CTAlink from '../../components/CTAlink'
import AnimationScreen from '../../components/AnimationScreen'
import VideoHeader from '../../components/VideoHeader'

class Info extends Component {
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
      return <AnimationScreen animTitle={this.props.animTitle} />
    }
    return (
      <GlobalWrap>
        <Logo />
        <VideoHeader src={this.props.src} />
        <H1>{this.props.h1}</H1>
        <Text>{this.props.text1}</Text>
        <Text>{this.props.text2}</Text>
        <Text>{this.props.text3}</Text>
        <CTAlink to={this.props.link}>{this.props.linkName}</CTAlink>
      </GlobalWrap>
    )
  }
}

export default Info
