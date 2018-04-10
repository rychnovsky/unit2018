import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { media } from '../../../common/media'

export const Img = styled.img `
  width: 150px;
  position: fixed;
  top: 31px;
  left: 31px;
  ${media.tablet `
  display: none;
  `};
`

export const StyledLink = styled(Link) `
  width: 150px;
  ${media.tablet `
  display: none;
  `};
`
