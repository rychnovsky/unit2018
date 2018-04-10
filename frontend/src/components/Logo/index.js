import React from 'react'

import LogoImg from '../../assets/img/logo__image.svg'
import { Img, StyledLink } from './styled'

const Logo = props => (
  <StyledLink to={'/'}>
    <Img src={LogoImg} alt="logo" />
  </StyledLink>
)

export default Logo
