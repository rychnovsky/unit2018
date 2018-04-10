import styled from 'styled-components'

export const ModalBox = styled.div `
  border-radius: 11px;
  position: fixed;
  width: 90%;
  box-sizing: border-box;
  bottom: 112px;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #ececec;
  border: 1px solid #ececec;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  &:after {
    content: '';
    position: absolute;
    right: 18px;
    bottom: -22px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #c6c6c6;
    clear: both;
  }
`
