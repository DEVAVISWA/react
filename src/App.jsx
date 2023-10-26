import React, { useRef } from 'react'

function App() {

  const buttonRef = useRef(null)

  const buttonHandler = () => {
    // console.log(buttonRef.current)
    // buttonRef.current.style.backgroundColor = 'pink'
    const colors= ['red','green','pink','blue','yellow','gold', 'silver','black','purple','orange']
    const randomColor= Math.floor(Math.random()*10)
    // console.log(randomColor)
    buttonRef.current.style.backgroundColor= colors[randomColor]
  }


  return (
    <div>
      <h3>Button color changer</h3>
      <button onClick={buttonHandler} ref={buttonRef}>Click to change color</button>
    </div>
  )
}

export default App