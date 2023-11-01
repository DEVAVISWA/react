import React, { useState } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'
import './Proudcts'

function App() {

  const[count,setCount] = useState(0)
  
  const incrementHandler = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Navbar count={count}/>
      <Header />
      <Section count={count} incrementHandler={incrementHandler} />
      <Footer />
    </div>
  )
}

export default App