import React, { Component } from 'react'
import GlobalWrap from '../../components/GlobalWrap'
import Logo from '../../components/Logo'
import { H1 } from '../../common/typography'
import { ImageWrap } from './styled'
import { DuoWrap, BtnWrap, Button } from './styled'
import SkodikHelp from '../../components/SkodikHelp'

import Img1 from '../../assets/img/kontrolaHra/05_quiz_Choice1_WRONG.svg'
import Img2 from '../../assets/img/kontrolaHra/05_quiz_Choice2_WRONG.svg'
import Img3 from '../../assets/img/kontrolaHra/05_quiz_Choice3_WRONG.svg'
import Img4 from '../../assets/img/kontrolaHra/05_quiz_Choice4_RIGHT.svg'

class KontrolaHra extends Component {
  answer = 3

  constructor(props) {
    super(props)
    this.state = { success: null }
  }

  onSelect = position => {
    console.log('selected')
    if (position == this.answer) {
      this.onSuccess()
    } else {
      this.onFail()
    }
  }

  onSuccess = () => {
    this.setState({ success: true })
  }

  onFail = () => {
    this.setState({ success: false })
  }

  render() {
    let skodik
    if (this.state.success === true) {
      skodik = (
        <SkodikHelp
          to="/konec"
          visible
          linkText="HOTOVO"
          title1="Správně, skvělá práce!"
          text1="Auto si dokončil !"
        />
      )
    } else if (this.state.success === false) {
      skodik = (
        <SkodikHelp
          onClick={() => {
            this.setState({ success: null })
          }}
          visible
          linkText="Zkusit znovu"
          title1="Kousek vedle, zkus to znovu"
        />
      )
    } else {
      skodik = (
        <SkodikHelp
          onClick={() => {
            this.setState({ success: null })
          }}
          visible={false}
          linkText="Už vím!"
          title1="Ovládání hry"
          text1="Zmáčkni auto, které je podle tebe bez chyb."
          title2="Jak vypadá auto bez chyb?"
          text2="Takové auto má všechna kola, světla, dveře a ... Však ty si poradíš."
        />
      )
    }

    return (
      <GlobalWrap>
        <Logo />
        <H1 center>Vzberte auto, které nemá žádnou vadu</H1>
        <BtnWrap>
          <DuoWrap>
            <Button onClick={() => this.onSelect(0)}>
              <img src={Img1} />
            </Button>
            <Button onClick={() => this.onSelect(1)}>
              <img src={Img2} />
            </Button>
          </DuoWrap>
          <DuoWrap>
            <Button onClick={() => this.onSelect(2)}>
              <img src={Img3} />
            </Button>
            <Button onClick={() => this.onSelect(3)}>
              <img src={Img4} />
            </Button>
          </DuoWrap>
        </BtnWrap>
        {skodik}
      </GlobalWrap>
    )
  }
}

export default KontrolaHra
