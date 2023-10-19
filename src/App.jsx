import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count:0,
    }
  }
 increment = () =>{
  this.setState({
    count: this.state.count + 1
  })
 }
 reset = () =>{
  this.setState({
    count: 0
  })
 }
 decrement = () =>{
  this.setState({
    count: this.state.count - 1
  })
 }
  render() {
    return (
      <div>
        <p> Count : {this.state.count} </p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default App