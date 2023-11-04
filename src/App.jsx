import React, { useState } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'
import './Proudcts'

function App() {

  const[count,setCount] = useState(0)
  const[cart,setCart] = useState([])
  const[cartProducts,setCartProducts] = useState({})
  
  const incrementHandler = () => {
        
  }
  const decHandler = () => {
    setCount(count-1)
  }

  const addToCart = (product) => {
    console.log(product)
    setCart([...cart,product])
    setCount(count + 1)
    console.log(cart)
    setCartProducts({...cartProducts,[product.id] : true})
    console.log(cartProducts)
  }  
  const removeFromCart = () => {    
    setCount(count-1)
  }

  return (
    <div>
      <Navbar count={count}/>
      <Header />
      <Section count={count} incrementHandler={incrementHandler} 
      decHandler={decHandler} addToCart={addToCart}
      removeFromCart={removeFromCart} cartProducts={cartProducts} />
      <Footer />
    </div>
  )
}

export default App