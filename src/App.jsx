import React, { useReducer, useState } from 'react'
import { initialState, reducer } from './reducers/countReducer'

function App() {
 
  const[state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <h3>Count :- {state.count} </h3>
      <button onClick={()=>dispatch({type:'incr'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decr'})}>Decrement</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
      <h3>ClickHistory:- </h3>
      <p>{state.clickHistory}</p>
    </div>
  )
}

export default App