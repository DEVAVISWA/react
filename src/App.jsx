import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state)=> state)
  return (
    <div>
      Count :- {counter}
      <br />
      <button onClick={()=> dispatch({type: 'INCR'})}> inc </button>
      
      <button onClick={()=> dispatch({type: 'DECR'})}> dec </button>
      
      <button onClick={()=> dispatch({type: 'RESET'})}>reset </button>
    </div>
  )
}

export default App