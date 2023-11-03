import React from 'react'
import { createStore } from 'redux'

const inputReducer = (state = [], action) => {
  switch (action.type) {
    case 'NewNote':
      return state.concat(action.payload)

    case 'Toogle':
      const id = action.payload.id //get the value first and store it in a const so that we dont change the state directly
      
      const importanceToChange = state.find(n => n.id === id) //get the current state
      
      const changedNote = {  //make necessary change
        ...importanceToChange,
        importance : !importanceToChange.importance
      }

      return state.map(note =>
          note.id !== id ? note : changedNote
        )

    default:
      return state
  }

}
const inputStore = createStore(inputReducer)

inputStore.dispatch({
  type: 'NewNote',
  payload:
  {
    id: 1,
    content: 'abcd',
    importance: true
  }
})
inputStore.dispatch({
  type: 'NewNote',
  payload:
  {
    id: 2,
    content: 'efgh',
    importance: false
  }
})
inputStore.dispatch({
  type: 'Toogle',
  payload:
  {
    id: 1
  }
})
inputStore.dispatch({
  type: 'Toogle',
  payload:
  {
    id: 2
  }
})


function App() {
  console.log(inputStore.getState())
  return (
    <div>
      {
        inputStore.getState().map(note =>
          <li key={note.id}>{note.content} {note.importance ? '⭐' : ''} </li>)
      }
    </div>
  )
}

export default App