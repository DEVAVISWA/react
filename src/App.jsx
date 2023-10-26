import React, { useRef } from 'react'

function App() {

  const inputRef = useRef(null)

  const buttonClickHandler = () => {
    // console.log(inputRef)
    // console.log(inputRef.current)
    // console.log(inputRef.current.value)
    // inputRef.current.value= 'devaviswa'
    inputRef.current.focus()
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={buttonClickHandler}>Focus Input</button>
    </div>
  )
}

export default App 