import React from 'react'
import { createStore } from 'redux'

const inputReducer = (state =[] , action) => {
  if(action.type=='NewNote'){
    state.push(action.payload)
    return state
  }
  return state
}
const inputStore = createStore(inputReducer)

inputStore.dispatch ({
  type: 'NewNote',
  payload: 
    {
      id: 1,
      content: 'abcd',
      importance: false
    }   
})
inputStore.dispatch ({
  type: 'NewNote',
  payload: 
    {
      id: 2,
      content: 'efgh',
      importance: true
    }   
})

function App() {
  console.log(inputStore.getState())
  return (
    <div>
      {
        inputStore.getState().map(note =>
          <li key={note.id}>{note.content}</li> )
      }
    </div>
  )
}

export default App