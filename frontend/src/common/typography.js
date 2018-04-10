import styled from 'styled-components'

import { colors } from './variables'

export const H1 = styled.h1 `
  font-family: 'Roboto', sans-serif;
  text-align: ${props => props.center ? 'center' : 'left'};
  font-size: 24px;
  line-height: 35px;
  color: ${colors.text};
`

export const H2 = styled.h2 `
  font-family: 'Roboto', sans-serif;
  font-style: 'Bold';
  text-align: ${props => props.center ? 'center' : 'left'};
  font-size: 25px;
  line-height: 23px;
  color: ${colors.text};
`

export const Text = styled.p `
  font-family: 'Roboto', sans-serif;
  text-align: ${props => props.center ? 'center' : 'left'};
  font-size: 20px;
  line-height: 23px;
  color: ${colors.text};
`