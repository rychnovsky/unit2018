import Rotate from './styled'

import React from 'react'

import Img from '../../assets/img/logo.svg'

const LoadingCircle = () => (
  <Rotate>
    <img src={Img} />
  </Rotate>
)

export default LoadingCircle
