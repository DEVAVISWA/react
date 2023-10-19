import React from 'react'
import { useState } from 'react'
import Count from './component/count'

function Button({onClicking, name} ){
    return (
        <button onClick={onClicking}> {name} </button>
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
        <Button onClicking = {increment} name={'Increment'}/>
        <Button onClicking={reset} name={"Reset"}/> 
        <Button onClicking= {decrement} name= {'Decrement'} />
    </div>
  )
}

export default App