import React, { Component } from './node_modules/react'
import { Container } from './node_modules/reactstrap'
import { NavMenu } from './NavMenu'

export class Layout extends Component {
  static displayName = Layout.name

  render() {
    return (
      <div>
        <NavMenu />
        <Container>{this.props.children}</Container>
      </div>
    )
  }
}
