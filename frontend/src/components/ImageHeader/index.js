import React from 'react'
import styled from 'styled-components'

const Img = styled.img `
  width: 100%;
  height: 300px;
`

const ImageGeader = props => <Img src={props.img} />

export default ImageGeader
