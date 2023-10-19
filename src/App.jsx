import React, { Component } from 'react'

export class App extends Component {
  componentDidMount(){
    console.log('component mounted')
  }
  componentDidUpdate(){
    console.log('component updated')
  }
  componentWillUnmount(){
    console.log('component unmounted')
  }
  render() {
    return (
      <div>App</div>
    )
  }
}

export default App