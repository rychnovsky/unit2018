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
  render() {
    return (
      <GlobalWrap>
        <Logo />
        <H1>Vzberte auto, které nemá žádnou vadu</H1>
        <ImageWrap />
        <BtnWrap>
          <DuoWrap>
            <Button>
              <img src={Img1} />
            </Button>
            <Button>
              <img src={Img2} />
            </Button>
          </DuoWrap>
          <DuoWrap>
            <Button>
              <img src={Img3} />
            </Button>
            <Button>
              <img src={Img4} />
            </Button>
          </DuoWrap>
        </BtnWrap>
        <SkodikHelp />
      </GlobalWrap>
    )
  }
}

export default KontrolaHra
