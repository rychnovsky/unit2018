import React, { Component } from 'react'

import Button from './Color'
import { Wrap } from './styled'

class ColorsBox extends Component {
  handleClick = () => {
    document.querySelectorAll('cls-1').fill = 'green'
  }

  render() {
    return (
      <Wrap>
        <Button color="red" onClick={this.handleClick} />
        <Button color="blue" onClick={this.handleClick} />
        <Button color="green" onClick={this.handleClick} />
        <Button color="purple" onClick={this.handleClick} />
        <Button color="orange" onClick={this.handleClick} />
        <Button color="yellow" onClick={this.handleClick} />
        <Button color="white" onClick={this.handleClick} />
        <Button color="grey" onClick={this.handleClick} />
        <Button color="black" onClick={this.handleClick} />
        <Button color="navy" onClick={this.handleClick} />
      </Wrap>
    )
  }
}

export default ColorsBox
