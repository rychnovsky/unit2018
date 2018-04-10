import React, { Component } from 'react'

import Button from './Color'
import { Wrap } from './styled'

class ColorsBox extends Component {
  handleClick = e => {
    const path = document.querySelector('.cls-1')
    path.style.fill = e.target.dataset.color
  }

  render() {
    return (
      <Wrap>
        <Button color="red" data-color="red" onClick={this.handleClick} />
        <Button color="blue" data-color="blue" onClick={this.handleClick} />
        <Button color="green" data-color="green" onClick={this.handleClick} />
        <Button color="orange" data-color="orange" onClick={this.handleClick} />
        <Button color="black" data-color="black" onClick={this.handleClick} />
        <Button color="grey" data-color="grey" onClick={this.handleClick} />
        <Button color="navy" data-color="navy" onClick={this.handleClick} />
        <Button color="yellow" data-color="yellow" onClick={this.handleClick} />
      </Wrap>
    )
  }
}

export default ColorsBox
