import React from 'react'
import styled from 'styled-components'

const Iframe = styled.iframe `
    width: calc(100% + 40px);
    border: 0;
`

const VideoHeader = props => <Iframe width="100%" height="300" src={props.src} frameborder="0" allowfullscreen=""/>

export default VideoHeader
