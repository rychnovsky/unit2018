import React, { Component } from 'react'
import styled from 'styled-components'
import ImgLink from '../../assets/img/škoďáček.svg'
import { colors } from '../../common/variables'
import SkodikInfo from '../SkodikInfo'

import { H1, Text } from '../../common/typography'

const Wrap = styled.div `
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 60px;
  height: 60px;
  border: 3px solid ${colors.darkGrey};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Img = styled.img `
  width: 40%;
`

class SkodikSmall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: (this.props.visible == true),
    }
  }

  componentWillReceiveProps(nextProps) {

    console.log("new props " + nextProps.visible);
    this.state = {
      modal: (nextProps.visible == true),
    }
  }

  handleClick = () => {
    console.log('clicked')
    this.setState({
      modal: !this.state.modal,
    })
  }

  render() {
    return (
      <Wrap onClick={this.handleClick}>
        <Img src={ImgLink} />
        {this.state.modal && <SkodikInfo
          to={this.props.to}
          onClick={this.props.onClick}
          linkText={this.props.linkText}
          title1={this.props.title1}
          text1={this.props.text1}
          title2={this.props.title2}
          text2={this.props.text2}/>
        }
      </Wrap>
    )
  }
}

export default SkodikSmall
