import React, { Component } from 'react'
import GlobalWrap from '../../components/GlobalWrap'
import Logo from '../../components/Logo'
import { H1 } from '../../common/typography'
import { Img, Button, BtnWrap, TrioWrap } from './styled'
import Img1 from '../../assets/img/komplet/parts_back_lights.svg'
import Img2 from '../../assets/img/komplet/parts_bear.svg'
import Img3 from '../../assets/img/komplet/parts_cake.svg'
import Img4 from '../../assets/img/komplet/parts_front_lights.svg'
import Img5 from '../../assets/img/komplet/parts_shit.svg'
import Img6 from '../../assets/img/komplet/parts_wheels.svg'

import imgmain from '../../assets/img/komplet/01_main_picture.svg'

import SkodikHelp from '../../components/SkodikHelp'
import CTAlink from '../../components/CTAlink'

class MontazHra extends Component {
  render() {
    return (
      <GlobalWrap>
        <Logo />
        <H1>Pomoz nám namontovat díly</H1>
        <Img src={imgmain} />
        <BtnWrap>
          <TrioWrap>
            <Button>
              <img src={Img1} />
            </Button>
            <Button>
              <img src={Img2} />
            </Button>
            <Button>
              <img src={Img3} />
            </Button>
          </TrioWrap>
          <TrioWrap>
            <Button>
              <img src={Img4} />
            </Button>
            <Button>
              <img src={Img5} />
            </Button>
            <Button>
              <img src={Img6} />
            </Button>
          </TrioWrap>
        </BtnWrap>
        <CTAlink to="kontrola">Provest kontrolu</CTAlink>
        <SkodikHelp />
      </GlobalWrap>
    )
  }
}

export default MontazHra
