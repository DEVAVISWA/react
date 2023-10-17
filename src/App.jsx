import React, {useState} from 'react'
import Counter from './component/counter'
import Button from './component/buttons'




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
      <Counter counter= {counter}/>
      <Button handleClick={handleClickPlus} name='plus'/>
      <Button handleClick={handleClickZero} name='zero'/>
      <Button handleClick={handleClickMinus} name='minus'/>
       
      {/* <button onClick={handleClickZero}>Reset</button>
      <button onClick={handleClickMinus}>Minus</button> */}
    </div>
  )
}

export default App