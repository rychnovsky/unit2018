import ImgLink from '../../assets/img/škoďáček.svg'

import React, { Component } from 'react'
import { Img, Wrap } from './styled'

class Skodik extends Component {
  render() {
    return (
      <Wrap>
        <Img src={ImgLink} />
      </Wrap>
    )
  }
}

export default Skodik
