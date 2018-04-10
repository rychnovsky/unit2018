import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Img } from './'

import { H2 } from '../../common/typography'

import { colors } from '../../common/variables'

import ImgLink from '../../assets/img/škoďáček.svg'

const Wrap1 = styled(props => <Link {...props} />) `
  border: none;
  cursor: pointer;
  max-width: ${props => props.restrict ? '100px' : '100%'};
  
  display: flex;
  justify-content: flex-end;
  
  text-align: center;
  width: 180px;
  height: 60px;
  border-radius: 50px;

  background: ${colors.lightGrey};

`

const Wrap2 = styled.div `
  border: 5px solid #DEDEDE;
  
  border-radius: 50px;
  width: 50px;
  height: 50px;
`

export const ImgSmall = styled.img `
  width: 20px;
  padding-top: 5px;
`

class SkodikBtn extends Component {

  render() {
    return (
      <Wrap1 to={this.props.to}>
        <H2>Klikni na mě</H2>
        <Wrap2>
          <ImgSmall src={ImgLink} />
        </Wrap2>
      </Wrap1>
    )
  }
}

export default SkodikBtn


