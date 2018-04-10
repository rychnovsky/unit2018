import React from 'react'
import GlobalWrap from '../GlobalWrap'
import Logo from '../Logo'
import { H1 } from '../../common/typography'
import Skodik from '../Skodik'
import SkodikHelp from '../SkodikHelp'
import styled from 'styled-components'


const HeadingWrap = styled.div `
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const LisovnaAnim = props => (
  <GlobalWrap>
    <Logo />
    <HeadingWrap>
      <H1 center>{props.animTitle}</H1>
    </HeadingWrap>
    <SkodikHelp />
  </GlobalWrap>
)

export default LisovnaAnim
