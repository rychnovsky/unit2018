import React from 'react'

import LogoImg from '../../assets/img/SKODA_Landscape_sRGB_10mm_S.png'
import { Img, StyledLink } from './styled'

const Logo = () => (
  <StyledLink to={'/'}>
    <Img src={LogoImg} alt="logo" />
  </StyledLink>
)

export default Logo
