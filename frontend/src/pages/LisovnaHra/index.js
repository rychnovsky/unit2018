import React, { Component } from 'react'
import GlobalWrap from '../../components/GlobalWrap'
import Logo from '../../components/Logo'
import { H1 } from '../../common/typography'
import SkodikHelp from '../../components/SkodikHelp'
import { TrioWrap, BtnWrap, Button, ImageWrap } from './styled'

import QuizMain from '../../assets/img/lisovnaHra/01quizMain_carSceleton.svg'
import AnswerBus from '../../assets/img/lisovnaHra/01quizAnswers_bus_WRONG.svg'
import AnswerBoat from '../../assets/img/lisovnaHra/01quizAnswers_boat_WRONG.svg'
import AnswerCar from '../../assets/img/lisovnaHra/01quizAnswers_carSceleton_RIGHT.svg'
import AnswerTractor from '../../assets/img/lisovnaHra/01quizAnswers_tractor_WRONG.svg'
import AnswerTrain from '../../assets/img/lisovnaHra/01quizAnswers_train_WRONG.svg'
import AnswerPlane from '../../assets/img/lisovnaHra/01quizAnswers_plane_WRONG.svg'

class LisovnaHra extends Component {
  answer = 2

  constructor(props) {
    super(props)
    this.state = { success: null }
  }

  onSelect = position => {
    console.log('selected')
    if (position == this.answer) {
      this.onSuccess()
    } else {
      this.onFail(position)
    }
  }

  onSuccess = () => {
    this.setState({ success: true })
    // TODO make answer box green
    // TODO show popup and redirect - onNext();
  }

  onFail = position => {
    this.setState({ success: false })
  }

  onNext = () => {}

  render() {
    console.log(`rendeer ${this.state.success}`)
    let skodik
    if (this.state.success === true) {
      skodik = (
        <SkodikHelp
          to="/svarovna"
          visible
          linkText="Pokračovat"
          title1="Správně, skvělá práce!"
          text1="Chceš pokračovat dále?"
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
          text1="Jen zmáčkni vybranou karoserii a škodík ti řekne, jestli je správná"
          title2="Jak vypadá karoserie?"
          text2="Copak jsi nikdy neviděl auto?"
        />
      )
    }

    return (
      <GlobalWrap>
        <Logo />
        <H1>Jak asi vypadá karoserie auta?</H1>
        <ImageWrap>
          <img src={QuizMain} />
        </ImageWrap>
        <BtnWrap>
          <TrioWrap>
            <Button onClick={() => this.onSelect(0)}>
              {' '}
              <img src={AnswerBoat} />{' '}
            </Button>
            <Button onClick={() => this.onSelect(1)}>
              {' '}
              <img src={AnswerBus} />{' '}
            </Button>
            <Button onClick={() => this.onSelect(2)}>
              {' '}
              <img src={AnswerCar} />{' '}
            </Button>
          </TrioWrap>
          <TrioWrap>
            <Button onClick={() => this.onSelect(3)}>
              {' '}
              <img src={AnswerPlane} />{' '}
            </Button>
            <Button onClick={() => this.onSelect(4)}>
              {' '}
              <img src={AnswerTractor} />{' '}
            </Button>
            <Button onClick={() => this.onSelect(5)}>
              {' '}
              <img src={AnswerTrain} />{' '}
            </Button>
          </TrioWrap>
          {skodik}
        </BtnWrap>
      </GlobalWrap>
    )
  }
}

export default LisovnaHra
