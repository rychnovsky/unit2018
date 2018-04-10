import styled from 'styled-components'

import SkodikHelp from '../../components/SkodikHelp'

export const Button = styled.button `
  flex-grow: 1;
  width: 90px;
  height: 90px;
  background: #ffffff;
  border: 2px dashed #cecece;
  box-sizing: border-box;
  border-radius: 2px;
  margin: 5px;
  img {
    max-height: 100%;
    max-width: 100%;
  }
`
export const TrioWrap = styled.div `
  display: flex;
`
export const BtnWrap = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 90px;
`
export const ImageWrap = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
