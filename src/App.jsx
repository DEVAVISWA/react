import React from 'react'
import { useState } from 'react'

function App() {
    const [inc,setInc]= useState(0)

    setTimeout(()=>{
        setInc(inc+1)
    },1000)
    console.log('rendering', inc)
  return (
    <div>App</div>
  )
}

export default App