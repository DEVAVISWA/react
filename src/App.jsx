import React, { Component } from 'react'



export class Hello extends Component {
  render() {
    return (
      <u><i>HELLO</i></u>
    )
  }
}


export class App extends Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

export default App
