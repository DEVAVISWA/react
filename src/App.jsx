import React from 'react'
import { useState } from 'react'

function App() {
    const[count,setCount] = useState(0)

    function increment () {
        setCount(count+1)
    }

    function reset () {
        setCount(0)
    }

    function decrement () {
        setCount(count-1)
    }

  return (
    <div>
        <p>Counts : {count}</p>
        <button onClick={increment}>Increase</button>
        <button onClick={reset}>Reset</button> 
        <button onClick={decrement}>Decrease</button>
    </div>
  )
}

export default App