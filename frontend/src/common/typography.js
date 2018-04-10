import styled from 'styled-components'

import { colors } from './variables'

export const H1 = styled.h1 `
  font-size: 3.4rem;
  line-height: 4.1rem;
  font-weight: 600;
`

export const H2 = styled.h2 `
  font-size: 3.4rem;
  text-align: ${props => props.center ? 'center' : 'left'};
  line-height: 4.1rem;
  font-weight: 600;
`

export const Subheading = styled.div `
  font-size: 1.4rem;
  font-family: 'Hind';
  color: ${colors.subheading};
`
