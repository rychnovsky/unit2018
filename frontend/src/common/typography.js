import styled from 'styled-components'

import { colors } from './variables'

export const H1 = styled.h1 `
  font-family: 'Roboto', sans-serif;
  text-align: ${props => props.center ? 'center' : 'left'};
  Font Size: 30px;
  Line Height: 35px;
  color: ${colors.text};
`

export const H2 = styled.h2 `
  font-family: 'Roboto', sans-serif;
  font-style: 'Bold';
  text-align: ${props => props.center ? 'center' : 'left'};
  Font Size: 20px;
  Line Height: 23px;
  color: ${colors.text};
`

export const Text = styled.p `
  font-family: 'Roboto', sans-serif;
  text-align: ${props => props.center ? 'center' : 'left'};
  Font Size: 20px;
  Line Height: 23px;
  color: ${colors.text};
`
