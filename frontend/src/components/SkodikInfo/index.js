import React, { Component } from 'react'
import { ModalBox } from './styled'
import CTALink from '../CTAlink'
import { H1, Text } from '../../common/typography'

class SkodikInfo extends Component {
  render() {
    return (
      <ModalBox>

        <H1 center>{this.props.title1}</H1>
        <Text>{this.props.text1}</Text>
        <H1 center>{this.props.title2}</H1>
        <Text>{this.props.text2}</Text>
        <CTALink to={this.props.to} onClick={this.props.onClick} >{this.props.linkText}</CTALink>
      </ModalBox>
    )
  }
}

export default SkodikInfo
