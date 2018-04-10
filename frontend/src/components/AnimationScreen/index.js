import React from 'react'
import GlobalWrap from '../GlobalWrap'
import Logo from '../Logo'
import { H1 } from '../../common/typography'
import Skodik from '../Skodik'
import SkodikHelp from '../SkodikHelp'

const LisovnaAnim = props => (
  <GlobalWrap>
    <Logo />
    <H1>{props.animTitle}</H1>
    <SkodikHelp />
  </GlobalWrap>
)

export default LisovnaAnim
