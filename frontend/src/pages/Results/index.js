import React, { Component } from 'react'
import CTAlink from '../../components/CTAlink'
import { Link } from 'react-router-dom'

import { Wrap, Socials } from './styled'
import { H1, H2, Text } from '../../common/typography'
import Logo from '../../components/Logo'
import GlobalWrap from '../../components/GlobalWrap'

import ShareButton from 'react-social-share-buttons'

import Badge from '../../assets/img/badge.svg'
import ImageSrc from '../../assets/img/kontrolaHra/05_quiz_Choice4_RIGHT.svg'

class Homepage extends Component {
  render() {
    return (
      <GlobalWrap>
        <Logo />
        <H1 center>Skvělá práce, jsi šikula! Děkuji&nbsp;ti!</H1>
        <img src={Badge} />
        <img src={ImageSrc} />
        <Text center>
          Tohle je naše nové auto, pěkné, že? Chceš se podívat, jak to v takové velké továrně vypadá
          ve skutečnosti? Pojď si prohlédnout galerii!
        </Text>
        <CTAlink onClick={() => window.location = "https://google.com"} restricted>
          Prohlédnout galerii
        </CTAlink>

        <br/>

        <Socials>
          <ShareButton
            compact
            socialMedia={'facebook'}
            url={"http://skodik.web-rychnovsky.com"}
            media={Badge}
            text="Zvládl jsem to!"
          />

          <ShareButton
            compact
            socialMedia={'google-plus'}
            url={"http://skodik.web-rychnovsky.com"}
            media={Badge}
            text="Zvládl jsem to!"
          />

          <ShareButton
            compact
            socialMedia={'twitter'}
            url={"http://skodik.web-rychnovsky.com"}
            media={Badge}
            text="Zvládl jsem to!"
          />
        </Socials>
      </GlobalWrap>
    )
  }
}

export default Homepage
