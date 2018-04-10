import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../common/variables'

const Button = styled(props => <Link {...props} />) `
  border: none;
  cursor: pointer;
  display: block;
  max-width: ${props => props.restrict ? '100px' : '100%'};
  padding: 11px 30px;
  text-align: center;
  border-radius: 20px;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  background-color: ${colors.secondary};
`
export default Button
