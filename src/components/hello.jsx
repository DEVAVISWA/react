import React, { Component } from 'react'
export class Hello extends Component {
    render() {
      // console.log(this.props)
      const {name} = this.props
      // console.log(name)
      return (
        <u><i>HELLO {name}</i></u>
      )
    }
  }

