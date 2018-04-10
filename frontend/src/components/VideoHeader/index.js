import React from 'react'
import styled from 'styled-components'

const Iframe = styled.iframe `
  
`

const VideoHeader = props => <Iframe width="560" height="315" src={props.src} frameborder="0" allowfullscreen=""/>

export default VideoHeader
