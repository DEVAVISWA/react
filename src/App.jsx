import React, { useRef } from 'react'

function App() {

  const bodyRef = useRef(document.body)

  const buttonHandler = () => {
    // console.log(buttonRef.current)
    // buttonRef.current.style.backgroundColor = 'pink'
    const colors= ['red','green','pink','blue','yellow','gold', 'silver','black','purple','orange']
    const randomColor= Math.floor(Math.random()*10)
    // console.log(randomColor)
    bodyRef.current.style.backgroundColor= colors[randomColor]
  }


  return (
    <div>
      <h3>Body color changer</h3>
      <button onClick={buttonHandler} >Click to change color</button>
    </div>
  )
}

export default App