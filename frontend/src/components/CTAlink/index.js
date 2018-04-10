import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../common/variables'

const Button = styled(props => props.to ? <Link {...props} /> : <button {...props} />) `
  border: none;
  cursor: pointer;
  display: block;

  margin-top: 50px;

  max-width: ${props => props.restrict ? '100px' : '100%'};
  padding: 24px 53px;
  border-radius: 2px;

  text-decoration: none;
  font-family: Roboto;
  font-weight: bold;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #ffffff;

  background-color: ${colors.skodaGreen};
`
export default Button
