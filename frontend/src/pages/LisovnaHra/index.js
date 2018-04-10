import React, { Component } from 'react'
import GlobalWrap from '../../components/GlobalWrap'
import Logo from '../../components/Logo'
import { H1 } from '../../common/typography'
import SkodikHelp from '../../components/SkodikHelp'
import { TrioWrap, BtnWrap, Button, ImageWrap } from './styled'

class LisovnaHra extends Component {

  answer = 0;

  constructor(props) {
    super(props);
    this.state = {success: null};
  }

  onSelect = (position) => {
    console.log("selected");
    if (position == this.answer){
      this.onSuccess();
    } else {
      this.onFail(position);
    }
  };

  onSuccess = () => {
    this.setState({success: true});
    //TODO make answer box green
    //TODO show popup and redirect - onNext();
  };

  onFail = (position) => {
    this.setState({success: false});
  };

  onNext = () => {

  };

  render() {

    console.log("rendeer " + this.state.success);
    let skodik;
    if (this.state.success === true){
      skodik = <SkodikHelp
          visible={true}
          linkText="Pokračovat"
          title1="Správně, skvělá práce!"
          text1="Chceš pokračovat dále?"/>

    } else if (this.state.success === false){
      skodik = <SkodikHelp
        visible={true}
        linkText="Zkusit znovu"
        title1="Kousek vedle, zkus to znovu"/>

    } else {
      skodik = <SkodikHelp
          visible={false}
          linkText="Už vím!"
          title1="Ovládání hry"
          text1="Jen zmáčkni vybranou karoserii a škodík ti řekne, jestli je správná"
          title2="Jak vypadá karoserie?"
          text2="Copak jsi nikdy neviděl auto?"/>;
    }

    return (
      <GlobalWrap>
        <Logo />
        <H1>Jak asi vypadá karoserie auta?</H1>
        <ImageWrap />
        <BtnWrap>
          <TrioWrap>
            <Button onClick={() => this.onSelect(0)} />
            <Button onClick={() => this.onSelect(1)} />
            <Button onClick={() => this.onSelect(2)} />
          </TrioWrap>
          <TrioWrap>
            <Button onClick={() => this.onSelect(3)} />
            <Button onClick={() => this.onSelect(4)} />
            <Button onClick={() => this.onSelect(5)} />
          </TrioWrap>
          {skodik}
        </BtnWrap>
      </GlobalWrap>
    )
  }
}

export default LisovnaHra
