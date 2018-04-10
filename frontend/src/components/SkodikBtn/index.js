import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import { Img } from './'

import { H2, Text } from '../../common/typography'

import { colors } from '../../common/variables'

import ImgLink from '../../assets/img/škoďáček.svg'

const pulsing = keyframes `
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
`

const Wrap1 = styled(props => <Link {...props} />) `
  border: none;
  cursor: pointer;
  max-width: ${props => props.restrict ? '100px' : '100%'};
  
  display: flex;
  justify-content: space-between;
  
  text-align: center;
  width: 100%;
  border-radius: 50px;

  background: ${colors.lightGrey};

  text-decoration: none;
  color: #626262;
  animation: ${pulsing} 2s linear infinite;


`

const innerPulsing = keyframes `
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`

const Wrap2 = styled.div `
  background: ${colors.lightGrey};
  border: 5px solid #DEDEDE;
  
  border-radius: 50px;
  width: 50px;
  height: 50px;

  animation: ${innerPulsing} 2s linear infinite;
`

export const ImgSmall = styled.img `
  width: 20px;
  padding-top: 5px;
`

const Text1 = styled.span `
  line-height: 60px;
  font-size: 18px;
  margin-left: 30px;
`

class SkodikBtn extends Component {

  render() {
    return (
      <Wrap1 to={this.props.to}>
        <Text1>Klikni na mě</Text1>
        <Wrap2>
          <ImgSmall src={ImgLink} />
        </Wrap2>
      </Wrap1>
    )
  }
}

export default SkodikBtn


