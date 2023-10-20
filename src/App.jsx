import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
    const[count,setCount]= useState(0)

    useEffect(()=>{
        document.title= count
    },[count])

    let buttonHandler = () => {
        setCount(count+1)
    }
  return (
    <div>
        <h2>Title changer</h2>
        <button onClick={buttonHandler}>Click to change title</button>
    </div>
    
  )
}

export default App