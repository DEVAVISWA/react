import React, { useState } from 'react'

function App() {
  const [count,setCount] = useState(0)
  const [clickCount,setClickCount] = useState([])


  const incHandler= () => {
    setCount(count+1)
    setClickCount(clickCount.concat('Increment'))
  }
  const decHandler= () => {
    setCount(count-1)
    setClickCount(clickCount.concat('Decrement'))
  }
  const resetHandler= () => {
    setCount(0)
    setClickCount(clickCount.concat('Reset'))
  }

  return (
    <div>
      <h3>Count :- {count} </h3>
      <button onClick={incHandler}>Increment</button>
      <button onClick={decHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
      <h3>ClickHistory:- </h3>
      <p>{clickCount.join(' , ')}</p>
    </div>
  )
}

export default App