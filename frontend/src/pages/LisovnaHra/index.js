import React, { Component } from 'react'
import GlobalWrap from '../../components/GlobalWrap'
import Logo from '../../components/Logo'
import { H1 } from '../../common/typography'
import SkodikHelp from '../../components/SkodikHelp'
import { TrioWrap, BtnWrap, Button, ImageWrap } from './styled'

class LisovnaHra extends Component {

  answer = 0;

  onSelect = (position) => {
    if (position == this.answer){
      this.onSuccess();
    } else {
      this.onFail(position);
    }
  };

  onSuccess = () => {
    //TODO make answer box green
    //TODO show popup and redirect - onNext();
  };

  onFail = (position) => {

  };

  onNext = () => {

  };

  render() {
    return (
      <GlobalWrap>
        <Logo />
        <H1>Jak asi vypadá karoserie auta?</H1>
        <ImageWrap />
        <BtnWrap>
          <TrioWrap>
            <Button onClick={this.onSelect(0)} />
            <Button onClick={this.onSelect(1)} />
            <Button onClick={this.onSelect(2)} />
          </TrioWrap>
          <TrioWrap>
            <Button onClick={this.onSelect(3)} />
            <Button onClick={this.onSelect(4)} />
            <Button onClick={this.onSelect(5)} />
          </TrioWrap>
        </BtnWrap>
        <SkodikHelp/>
      </GlobalWrap>
    )
  }
}

export default LisovnaHra
