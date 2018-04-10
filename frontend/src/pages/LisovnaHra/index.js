import React, { Component } from 'react'
import GlobalWrap from '../../components/GlobalWrap'
import Logo from '../../components/Logo'
import { H1 } from '../../common/typography'
import { TrioWrap, BtnWrap, Button, ImageWrap } from './styled'

class LisovnaHra extends Component {
  render() {
    return (
      <GlobalWrap>
        <Logo />
        <H1>Jak asi vypadá karoserie auta?</H1>
        <ImageWrap />
        <BtnWrap>
          <TrioWrap>
            <Button />
            <Button />
            <Button />
          </TrioWrap>
          <TrioWrap>
            <Button />
            <Button />
            <Button />
          </TrioWrap>
        </BtnWrap>
      </GlobalWrap>
    )
  }
}

export default LisovnaHra
