import React from 'react'

import LogoWhite from '../../../assets/img/logo__image.svg'
import { Img, StyledLink } from './styled'

const Logo = () => (
  <StyledLink to={'/'}>
    <Img src={LogoWhite} alt="logo" />
  </StyledLink>
)

export default Logo
