import React, { Component } from 'react'
import { ModalBox } from './styled'
import CTALink from '../CTAlink'
import { H1, Text } from '../../common/typography'

class SkodikInfo extends Component {
  render() {
    return (
      <ModalBox>
        <H1>{this.props.h1}</H1>
        <Text>{this.props.text}</Text>
        <CTALink to="hallo">{this.props.linkText}</CTALink>
      </ModalBox>
    )
  }
}

export default SkodikInfo
