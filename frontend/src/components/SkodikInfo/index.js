import React, { Component } from 'react'
import { ModalBox } from './styled'
import CTALink from '../CTAlink'
import { H1, Text } from '../../common/typography'

class SkodikInfo extends Component {
  render() {
    return (
      <ModalBox>

        <H1>{this.props.title1}</H1>
        <Text>{this.props.text1}</Text>
        <H1>{this.props.title2}</H1>
        <Text>{this.props.text2}</Text>
        <CTALink to="hallo">{this.props.linkText}</CTALink>
      </ModalBox>
    )
  }
}

export default SkodikInfo
