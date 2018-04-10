import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { media } from '../../common/media'

export const Img = styled.img `
  width: 150px;
  height: 46px;
  padding: 3px;

`

export const StyledLink = styled(Link) `
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-top: -20px;
  ${media.tablet `
    top: 39px;
    left: 43px;
  `};
`
