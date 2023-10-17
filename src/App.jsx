import React, {useState} from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  function handleClickPlus(){
    setCounter(counter +1 )
  }
  function handleClickZero(){
    setCounter(0)
  }
  function handleClickMinus(){
    setCounter(counter-1)
  }
  return (
    <div>
      <p> {counter} </p>
      <button onClick={handleClickPlus}>Plus</button>
      <button onClick={handleClickZero}>Reset</button>
      <button onClick={handleClickMinus}>Minus</button>
    </div>
  )
}

export default App