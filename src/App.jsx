import React from 'react'
import { useState } from 'react'

function Count ({count}){
    return(
        <p>Counts : { count }</p>
    )
}

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
        <Count count={count} />
        <button onClick={increment}>Increase</button>
        <button onClick={reset}>Reset</button> 
        <button onClick={decrement}>Decrease</button>
    </div>
  )
}

export default App