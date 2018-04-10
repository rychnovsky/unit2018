import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes `
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled.div `
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
`

export default Rotate
