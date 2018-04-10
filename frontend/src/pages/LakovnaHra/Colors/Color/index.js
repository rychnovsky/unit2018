import styled from 'styled-components'

const Button = styled.button `
  border-radius: 100px;
  height: 40px;
  width: 40px;
  display: inline-block;
  margin: 5px;
  border: 1px solid grey;
  background-color: ${props => props.color};
  &:focus {
    background-color: black;
  }
`
export default Button
