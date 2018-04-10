import React, { Component } from 'react'
import styled from 'styled-components'
import ImgLink from '../../assets/img/škoďáček.svg'
import { colors } from '../../common/variables'
import SkodikInfo from '../SkodikInfo'

const Wrap = styled.div `
  position: fixed;
  bottom: 5px;
  right: 5px;
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
    super(props)

    this.state = {
      modal: false,
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
        {this.state.modal && <SkodikInfo h1="hello" />}
      </Wrap>
    )
  }
}

export default SkodikSmall
