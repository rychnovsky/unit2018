import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { media } from '../../common/media'

export const Img = styled.img `
  width: 150px;
  display: flex;
`

export const StyledLink = styled(Link) `
  width: 150px;
  ${media.tablet `
  top: 39px;
  left: 43px;
  `};
`
