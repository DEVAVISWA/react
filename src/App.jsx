import React, { Component } from 'react'

export class App extends Component {
    constructor (props){
        super(props)
        this.state = {
            isInCart: true
        }
    }

    handleAddToCartButton = () =>{
        this.setState ({
            isInCart: ! this.state.isInCart
        })
    }
  render() {
    return (
      <div>
        {
            this.state.isInCart ?( <button onClick={this.handleAddToCartButton}>Add To Cart</button> ) :
            ( <button onClick={this.handleAddToCartButton}>Remove from cart</button>)
        }
      </div>
    )
  }
}

export default App